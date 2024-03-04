const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

const connectDB = require('./repository/db')

// Connect to MongoDB
connectDB()

const v1UserRouter = require('./v1/routes/userRoutes')
const v1PostRouter = require('./v1/routes/postRoutes')

app.use(express.json())
app.use('/api/v1/posts', v1PostRouter)
app.use('/api/v1/users', v1UserRouter)

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
