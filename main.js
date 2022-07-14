var audio1 = document.getElementById("testAudio");
var label = document.getElementById("label");
var setTime = function(){
  label.textContent = audio1.currentTime
};
setInterval(setTime, 1);

