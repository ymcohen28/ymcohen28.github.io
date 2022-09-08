var audio1 = document.getElementById("test-audio");
var label = document.getElementById("label");
setInterval(an,1);
var an = function() {
  label.textContent = audio1.currentTime;
  label.textContent+= audio1.src;
  label.textContent += window.outerHeight;
  label.textContent += window.outerWidth;
};
var text = "<div class='header'><a href='/index.html'><img class='logo' title = 'Site Logo - Home Page' alt = 'Site Logo' id='logo-header' src='/logo.png' ></a><table style=' float:right;'><tr><td><a class='head' href='/index.html'>Home</a></td><td><a class='head' href='/blog.html'>Blog</a></td><td><a class='head' href='/music.html'>My Music</a></td><td><a class='head' title = 'Note: This is for testing purposes only and will PROBABLY contain more bugs than the rest of the site!!' href='/test.html'>Test</a></td></tr></table></div>"
var realHeader = document.getElementsByTagName("header");
for (var i = 0; i < realHeader.length;i ++) {  
realHeader[i].innerHTML = text;}  
var header = document.getElementsByClassName("head");
for (var i = 0; i < header.length; i++) {
}
var head = document.getElementsByClassName("head");
for (var i = 0; i < head.length; i++) {
  if (Window.outerWidth > 400) {head[i].style.fontSize = "20px"}
  else {head[i].style.fontSize = "10px";}
}

