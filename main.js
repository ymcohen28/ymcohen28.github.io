var audio1 = document.getElementById("audio1");
var label = document.getElementById("label");
setInterval(an,1);
var an = function() {
  label.textContent = audio1.currentTime;
  label.textContent+= audio1.src;
  audio1.currentTime = 2; 
};

var header = document.getElementsByClassName("head");
for (var i = 0; i < header.length; i++) {
header[i].textContent = 'This is Hacked!!';
}
