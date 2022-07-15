var audio1 = document.getElementById("audio1");
var label = document.getElementById("label");
var a = function() {
  label.textContent = audio1.currentTime;
  label.textContent+= audio1.src;
                   };
setInterval(a,1);
