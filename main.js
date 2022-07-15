var audio1 = document.getElementById("testAudio");
var label = document.getElementById("label");
var setTime = function(){
  label.textContent = audio1.currentTime
};
setInterval(setTime, 1);

/*var nextSongButton = document.getElementById("nextSongButton");
var previousSongButtong = document.getElementById("previousSongButton");
var urls = ["https://ymcohen.github.io/Uforatzah.mp3","https://ymcohen.github.io/Tyere%20Briyder.mp3","https://ymcohen.github.io/Nyeh%20Bayusya.mp3","https://ymcohen.github.io/Wake%20up%20Yidden.mp3"];
var songUrl = 0;
audio1.src = urls[songUrl] 
var nextSong = function() {
  if (songUrl === urls.length){
  songUrl = 0}
  else {
  songUrl += 1
  }
};
var previousSong = function() {
if (songUrl === 0){
  songUrl = urls.length}
  else {
  songUrl -= 1
}
var urlName = document.getElementById("urlName");

var setSong = fucntion() {
  nextSongButton.addEventListener("click",nextSong);
previousSongButton.addEventListener("click",previousSong);

urlName.textContent = audio1.src;
                         };
setInterval(setSong, 1);


