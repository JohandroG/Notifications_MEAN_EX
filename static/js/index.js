console.log("Server On (Now)");

let socket = io("http://localhost:8080");



$('#but').on('click', function(event){
    event.preventDefault();
    socket.emit('notify', null);
});


socket.on('display1', function(info){
    let notification = `${info} joined us!</p>`;
    $('.messages' ).append(notification);
});

socket.on('display2', function(info){
    let notification = `${info} just triggered a notification!</p>`;
    $('.messages' ).append(notification);
});

socket.on('display3', function(info){
    let notification = `${info} left us!</p>`;
    $('.messages' ).append(notification);
});


