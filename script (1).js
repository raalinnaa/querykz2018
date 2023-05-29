"use strict";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBYq5hHzxerthDvZSQJ0_fm9pwaEBtTNxA",
    authDomain: "myproject-1189a.firebaseapp.com",
    databaseURL: "https://myproject-1189a.firebaseio.com",
    projectId: "myproject-1189a",
    storageBucket: "myproject-1189a.appspot.com",
    messagingSenderId: "1040505321300"
};
firebase.initializeApp(config);


const config = {transports: ['websocket', 'polling', 'flashsocket']};
const socket = io('http://localhost:8080', config);


socket.on('message', function (msg) {
    $('#list').append(`<li><h2>${msg.name}</h2><p>${msg.msg}</p></li>`).listview('refresh');
});

if (!login) location.replace('#main');

$('#send').click(function () {
    let msg = $('#msg');
    if (msg.val() === '') return false;

    let message = { name: login, msg: msg.val() };
    socket.emit('message', message);

    msg.val('');
});
$('#home').click(function () {
    login = undefined;
});