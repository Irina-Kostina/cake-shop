import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import cakesRouter from './routes/cakes'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = Number(process.env.PORT) || 5174

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/cakes', cakesRouter)

// Serve React static files (in production)
// const distPath = path.resolve(__dirname, '../../dist')
// app.use(express.static(distPath))
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(distPath, 'index.html'))
// })

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})
