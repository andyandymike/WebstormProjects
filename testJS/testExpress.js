/**
 * Created by I067382 on 8/23/2017.
 */

"use strict";

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
