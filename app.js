'use strict'
console.clear()
global.log = console.log

import express from 'express'
const app = express()

app.listen(3000, log(`Server Running on port 3000`))

app.route('/').get((req, res) => res.send('hello'))

export default app
