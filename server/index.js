const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");

//Setting up the db
app.get('/some-route', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM your_table');
    console.log('Query result:', result.rows);
    res.json(result.rows)
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Database query failed'
    });
  }
    //res.send('Test')
});

const PORT = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});