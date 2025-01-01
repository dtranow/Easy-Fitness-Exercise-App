require('dotenv').config()
const express = require('express')
const axios = require('axios')
const rateLimit = require('express-rate-limit')

const app = express()
app.use(express.json())
const port = process.env.PORT || 5000

const limiter = rateLimit({
  max: 6,
  windowMs: 30 * 60 * 1000,
  message: 'You have exceeded your limit of 6 questions in this 30 minute period!',
  headers: true,
  handler: (req, res) => {
    res.status(429).json({ error: 'You have exceeded your limit of 6 questions in this 30 minute period!' })
}})

app.use('/api/chat', limiter)

app.post('/api/chat', async (req, res) => {
  // Use prompt engineering to only allow exercise related questions
  const prompt = 'Imagine yourself as an "exercise instructor" in the world of artificial intelligence, where your primary responsibility is to instruct users on exercises and fitness. Do not answer questions not related to fitness or exercising. Please limit your answer to less than 450 characters. The questions from your client is as follows: '
  const { message } = prompt.concat(req.body)

  try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        max_tokens: 500,
        temperature: 0.6
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });
      console.log(response.data.choices)
      res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  });

app.listen(port, () => {
    console.log(`server is live on port ${port}`)
})

