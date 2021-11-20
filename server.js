const { Socket } = require('engine.io');
const express = require('express');
const app = express();

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));

//----------------------------------------------------------------------------
app.get('/', function( request, response ){
	response.render( 'index' ); 
});
//----------------------------------------------------------------------------
const server = app.listen(8080, function(){
    console.log('Server with socket.io')
})

const io = require('socket.io')(server)

io.on("connection", function (socket) {
    console.log("Someone connected!");
    io.sockets.emit('display1', socket.id);
    
    socket.on("notify", function () {
        io.sockets.emit('display2', socket.id);
    });

    socket.on("disconnect", function(){
		io.emit("display3", socket.id)
	})
});

io.off("connection", function (socket) {
    io.sockets.emit('display3', socket.id);
});





