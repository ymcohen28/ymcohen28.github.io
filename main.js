var audio = document.getElementById("audio1");
var label = document.getElementById("label");
var a = function() {label.textContent += audio.currentTime
                   label.textContent+= audio.src
                   };
setInterval(a,1);
