var audio1 = document.getElementById("audio1");
var label = document.getElementById("label");
var an = function() {
  label.textContent = audio1.currentTime;
  label.textContent+= audio1.src;
                   };
setInterval(an,1);
var header = document.getElemntsByClassName("head");
for (var i = 0; i < header.length; i++) {
header[i].textContent = 'hello'
}
