const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
const { name } = req.body;

 res.status(200).json({
     message: `Hello Afrilogic Ninja ${name}`
 });
});

app.listen(port, () => {
    console.log(chalk.green(`Afrilogic API running on port: ${port}`));
});

module.exports = app;