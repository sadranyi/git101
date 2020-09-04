const express = require('express');
const chalk = require('chalk');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
 res.status(200).json({
     message: "Hello Afrilogic Ninjas!!"
 });
});

app.listen(port, () => {
    console.log(chalk.green(`Afrilogic API running on port: ${port}`));
});

module.exports = app;