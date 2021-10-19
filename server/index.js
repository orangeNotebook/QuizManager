const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 
const cors = require('cors')

app.use(express.json());
app.use(cors())


app.get('/', async (req, res) => {
    res.send("Hello World!")
  })

  app.listen(port, () => console.log(`Listening on port ${port}`)); 