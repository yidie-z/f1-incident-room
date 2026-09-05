import path from "path"
import { spawn } from "child_process"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// 生成器使用的 Python（装有 FastF1 的托管运行时）。可用环境变量 F1_PYTHON 覆盖。
const PYTHON =
  process.env.F1_PYTHON ||
  "D:\\KimiData\\daimon-share\\daimon\\runtime\\python\\.venv\\Scripts\\python.exe"

/** 开发服务器接口：POST /api/generate { year, gp, a, b, lap? } → 运行事件生成器 */
function incidentGeneratorApi(): Plugin {
  return {
    name: "incident-generator-api",
    configureServer(server) {
      server.middlewares.use("/api/generate", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405
          res.end(JSON.stringify({ ok: false, error: "POST only" }))
          return
        }
        let body = ""
        req.on("data", (c) => (body += c))
        req.on("end", () => {
          try {
            const { year, gp, a, b, lap } = JSON.parse(body || "{}")
            if (!year || !gp || !a || !b) throw new Error("缺少参数")
            const args = [
              "tools/generate_incident.py",
              "--year", String(year),
              "--gp", String(gp),
              "--drivers", String(a).toUpperCase(), String(b).toUpperCase(),
            ]
            if (lap) args.push("--lap", String(lap))
            const child = spawn(PYTHON, args, {
              cwd: path.resolve(__dirname),
              // Windows 中文区域下 Python 默认 GBK 输出，打印中文会崩；强制 UTF-8
              env: { ...process.env, PYTHONIOENCODING: "utf-8", PYTHONUTF8: "1" },
            })
            let log = ""
            child.stdout.on("data", (d) => (log += d))
            child.stderr.on("data", (d) => (log += d))
            child.on("close", (code) => {
              const m = log.match(/完成 → .*incidents[\\/]([\w-]+)/)
              // 从日志里提取人话（过滤 FastF1 的请求/解析流水行），让失败原因直接可见
              const tail = log
                .split("\n")
                .filter((l) => l.trim() && !/^\S+\s+(INFO|WARNING|ERROR|DEBUG)\s/.test(l))
                .slice(-3)
                .join(" ")
              res.setHeader("Content-Type", "application/json")
              res.end(
                JSON.stringify(
                  code === 0
                    ? { ok: true, slug: m?.[1] ?? null, log }
                    : { ok: false, error: tail || `生成器退出码 ${code}`, log },
                ),
              )
              if (code === 0) server.ws.send({ type: "full-reload" })
            })
          } catch (e) {
            res.statusCode = 400
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ ok: false, error: String(e) }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react(), incidentGeneratorApi(), viteSingleFile()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
