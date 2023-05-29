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

var myDB = firebase.database();
var contactsRef = myDB.ref('contacts');
contactsRef.push({
    name: "Ralina",
    surname: "nashenova",
    phone: "87027775560"

});

let slider = $('#slider');
let currentSlide = 0;
let list = $('#list');
let slide = $('.slide');
let interval = -360 * currentSlide;

slider.swiperight(function () {
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = 4;
        interval = -360 * currentSlide;
        list.css('left', interval + 'px');
    } else {
        interval = -360 * currentSlide;
        if (currentSlide === -1) {
            currentSlide++;
            list.css('left', '50px');
            setTimeout(function () {
                list.css('left', '')
            }, 200);
        } else {
            list.css('left', interval + 'px');
        }
    }
});
slider.swipeleft(function () {
    currentSlide++;
    if (currentSlide == 5) {
        currentSlide = 0;
        interval = -360 * currentSlide;
        list.css('left', interval + 'px');
    } else {
        if (currentSlide !== slide.size()) {
            interval = -360 * currentSlide;
            list.css('left', interval + 'px');
        }
        else {
            currentSlide--;
            interval = -360 * currentSlide;
            list.css('left', interval - 50 + 'px');
            setTimeout(function () {
                list.css('left', interval + 'px')
            }, 200);
        }
    }
});
