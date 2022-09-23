express = require('express');
const { writeFile, readFile } = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(writeFile)
const readFileAsync = util.promisify(readFile)
app = express()
// var { unicornsJSON } = require('./data.json')
const unicornsJSON = require('./data.json')



const port = 5000

app.get('/api/v1/unicorns', (req, res) => {
    res.send('Every last Unicorn')
    res.json(unicornsJSON)
})

app.post('/api/v1/unicorn', (req, res) => {
    unicornsJSON.push(req.body)

    writeFileAsync('./data.json', JSON.stringify(unicornsJSON), 'utf-8')
        .then(() => { })
        .catch((err) => { console.log(err); })
})

app.get('/api/v1/unicorn/:id', (req, res) => {
    let found = false
    for (i = 0; i < unicornsJSON.length; i++) {
        if (unicornsJSON[i]._id == req.params.id) {
            found = true
            break
        }
    }

    if (found) {
        res.json(unicornsJSON[i]);
        return
    }

})

app.patch('/api/v1/unicorn/:id', (req, res) => {
    let found = false
    for (i = 0; i < unicornsJSON.length; i++) {
        if (unicornsJSON[i]._id == req.params.id) {
            unicornsJSON[i] = req.params;
            found = true
            break
            res.send("Patched a unicorn successfully!");
            return
        }
    }
    if (!found) {
        res.send("No unicorns could be patched with that name");
    }
})

app.delete('/api/v1/unicorn/:id', (req, res) => {
    let found = false
    for (i = 0; i < unicornsJSON.length; i++) {
        if (unicornsJSON[i]._id == req.params.id) {
            found = true
            delete unicornsJSON[i]
            res.send("Patched a unicorn successfully!");
            return
        }
    }
    if (!found) {
        res.send("No unicorns could be Deleted with that name");
    }

    res.send("Deleted successfully!!")
})

// app.listen(port, () => {
//         console.log(`Making new Unicorn Friends on port ${port}`)
//     }
// )

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})