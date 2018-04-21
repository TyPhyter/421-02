const http = require('http');

const goodPORT = 7000;
const badPORT = 7500;

function handleGoodRequest(request, response){
    response.end("You're a web coding master!");
}

function handleBadRequest(request, response){
    response.end("You're a dirty pirate hooker. Go back to your home on whore island.");;
}

const goodServer = http.createServer(handleGoodRequest);

const badServer = http.createServer(handleBadRequest);

goodServer.listen(goodPORT,()=>{
    console.log(`good server listening on ${goodPORT}`)
});

badServer.listen(badPORT,()=>{
    console.log(`bad server listening on ${badPORT}`)
});