/**
 * Created by Ziv Ben Yair on 7/29/2016.
 */

var button1 = document.getElementById('experience');
var button2 = document.getElementById('services');
var button3 = document.getElementById('ip4g');
var button4 = document.getElementById('monetize');

button1.addEventListener('click', function() {
    changeBackgroundImage('experience');
}, false);

button2.addEventListener('click', function() {
    changeBackgroundImage('services');
}, false);

button3.addEventListener('click', function() {
    changeBackgroundImage('ip4g');
}, false);

button4.addEventListener('click', function() {
    changeBackgroundImage('monetize');
}, false);

function changeBackgroundImage( my_id ) {
    var slider = document.getElementById('slider');
    if (my_id==='experience') {
        slider.style.backgroundImage = "url('images/slider/custom-experience.jpg')";
    } else if(my_id==='services') {
        slider.style.backgroundImage = "url('images/slider/digital-services.png')";
    } else if (my_id==='ip4g'){
        slider.style.backgroundImage = "url('images/slider/evolve-to-ip4g.jpg')";
    } else if (my_id==='monetize'){
        slider.style.backgroundImage = "url('images/slider/smartly-monetize.jpg')";
    }
}
