console.log("hello world from node")

let fs = require(`fs`)
let colors = require(`colors`)
let http = require(`http`)

fs.readFile(__dirname + '/message.txt', {encoding: 'utf-8'},(err,data) => {
    console.log("Its a rainbow" .rainbow)
});


http.createServer(function (req, res){
    console.log(`got a request on port 1337`.rainbow.bgBlack)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200, {
        "content-type": "text/html"
    })

    let word = [
        `fuck`,
        `shit`,
        `cunt`,
        `asswipe`,
        `asshole`,
        `putang ina`,
        `asa akira`,
        ]

    let chosenWord = word[Math.floor(Math.random()*word.length)];

    res.end(chosenWord)

}).listen(1337)

http.createServer(function (req, res){
    console.log(`got a request on port 1338`.rainbow.bgBlack)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200, {
        "content-type": "text/html"
    })

    let word = [
        `butt`,
        `Kelly Clarkson`,
        `poop`,
        `noob`,
        `fart`,
    ]

    let chosenWord = word[Math.floor(Math.random()*word.length)];

    res.end(chosenWord)

}).listen(1338)