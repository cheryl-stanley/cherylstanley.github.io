// import './index.scss'
// import AnimatedLetters from 'components/AnimatedLetters';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import { useState } from 'react';
// // import { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faGitAlt, faJsSquare, faReact, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';
// // import { faLinux } from '@fortawesome/free-brands-svg-icons';
// // import Loader from 'react-loaders'
// // import { faPython } from '@fortawesome/free-brands-svg-icons';
// // import { faDownload} from '@fortawesome/free-solid-svg-icons';
// // import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// // import 'react-vertical-timeline-component/style.min.css';
// // import WorkIcon from '@mui/icons-material/Work'
// // import UCSDIcon from '../../../src/assets/images/UCSD.png'
// // import PDFViewer from '../PDFViewer';
// // import { Button } from '@mui/material';
// // import { saveAs } from 'file-saver';
// import samplePdf from 'resources/Cheryl Stanley - Resume (2024).pdf'



// code below is from https://pastebin.com/cYaZamTx
var b = document.body;
var imgurl = "images/images/fairydust (2).png"; 
var size = [20, 30];

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getSize() {
    return rand(size[0], size[1]);
}

function lerp(a, b, f) {
    return (b - a) * f + a;
}

function heart(x, y) {
    var s = getSize();
    x -= s / 2;
    y -= s / 2;
    x = Math.floor(x) + rand(-5, 5);
    y = Math.floor(y) + rand(-5, 5);
    var fx = x + rand(-40, 40);
    var fy = y + rand(-40, 40);
    var i = document.createElement("img");
    i.src = imgurl;
    //i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; opacity: 1; z-index: 1000000;`;
    i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
    b.appendChild(i);
    var f = 0;
    var interval;
    interval = setInterval(function() {
        var _x = Math.floor(lerp(x, fx, f));
        var _y = Math.floor(lerp(y, fy, f));
        i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${_x}px; top: ${_y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
        // i.style.left = `${_x}px`;
        // i.style.top = `${_y}px`;
        i.style.opacity = 1 - f;
        f += 0.01;
        if(f > 1) {
            clearInterval(interval);
            b.removeChild(i);
        }
    }, 10);
}

function bro(x, y) {
    for (var i = 0; i < 5; i++) {
        heart(x, y);
    }
}

b.addEventListener("click", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    bro(x, y);
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

// import './index.scss'
// import AnimatedLetters from 'components/AnimatedLetters';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import { useState } from 'react';
// import { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGitAlt, faJsSquare, faReact, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';
// import { faLinux } from '@fortawesome/free-brands-svg-icons';
// import Loader from 'react-loaders'
// import { faPython } from '@fortawesome/free-brands-svg-icons';
// import { faDownload} from '@fortawesome/free-solid-svg-icons';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import WorkIcon from '@mui/icons-material/Work'
// import UCSDIcon from '../../../src/assets/images/UCSD.png'
// import PDFViewer from '../PDFViewer';
// import { Button } from '@mui/material';
// import { saveAs } from 'file-saver';
// import samplePdf from 'resources/Cheryl Stanley - Resume (2024).pdf'



// // code below is from https://pastebin.com/cYaZamTx
// var b = document.body;
// var imgurl = "images/images/fairydust (2).png"; 
// var size = [20, 30];

// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getSize() {
//     return rand(size[0], size[1]);
// }

// function lerp(a, b, f) {
//     return (b - a) * f + a;
// }

// function heart(x, y) {
//     var s = getSize();
//     x -= s / 2;
//     y -= s / 2;
//     x = Math.floor(x) + rand(-5, 5);
//     y = Math.floor(y) + rand(-5, 5);
//     var fx = x + rand(-40, 40);
//     var fy = y + rand(-40, 40);
//     var i = document.createElement("img");
//     i.src = imgurl;
//     i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; opacity: 1; z-index: 1000000;`;
//     // i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
//     b.appendChild(i);
//     var f = 0;
//     var interval;
//     interval = setInterval(function() {
//         var _x = Math.floor(lerp(x, fx, f));
//         var _y = Math.floor(lerp(y, fy, f));
//         // i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${_x}px; top: ${_y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
//         i.style.left = `${_x}px`;
//         i.style.top = `${_y}px`;
//         i.style.opacity = 1 - f;
//         f += 0.01;
//         if(f > 1) {
//             clearInterval(interval);
//             b.removeChild(i);
//         }
//     }, 10);
// }

// function bro(x, y) {
//     for (var i = 0; i < 5; i++) {
//         heart(x, y);
//     }
// }

// b.addEventListener("click", function(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     bro(x, y);
// });

// var myIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {
//         myIndex = 1;
//     }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 2000);
// }
