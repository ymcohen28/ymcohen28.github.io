var body1 = document.getElementsByClassName("percent45");

var audio1 = document.getElementById("test-audio");
var label = document.getElementById("label");
setInterval(an,1);
var an = function() {
  label.textContent = audio1.currentTime;
  label.textContent+= audio1.src;
  label.textContent += window.outerHeight;
  label.textContent += window.outerWidth;
};

var text;

var realHeader = document.getElementsByTagName("header");

var changeBodySize = function() {
if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
  for( var i = 0; i < body1.length)
  {body1[i].style.width = "45%";}
}
if (screen.orientation.type !== "landscape-primary" && screen.orientation.type !== "landscape-secondary") {
  for(var i = 0; i <  body1.length; i++) 
  {body1[i].style.width = "80%";}
}
};

var siteNavigation = function() {

if (screen.orientation.type === "landscape-primary" || screen.orientation.type === "landscape-secondary") {
          console.log("yay");

    for (var j = 0; j < realHeader.length;j ++) {  
realHeader[j].innerHTML  = "<div class='header'><a href='https://ymcohen28.github.io/index.html'><img class='logo' title = 'Site Logo - Home Page' alt = 'Site Logo' id='logo-header' src='https://ymcohen28.github.io/logo.png' ></a><table style=' float:right;'><tr><td><a class='head' href='/index.html'>Home</a></td><td><a class='head' href='https://ymcohen28.github.io/home/blog.html'>Blog</a></td><td><a class='head' href='https://ymcohen28.github.io/home/music.html'>My Music</a></td><td><a class='head' title = 'Note: This is for testing purposes only and will PROBABLY contain more bugs than the rest of the site!!' href='https://ymcohen28.github.io/home/test.html'>Test</a></td></tr></table></div>";}

    head[i].style.fontSize = "50px"}
if (screen.orientation.type !== "landscape-primary" && screen.orientation.type !== "landscape-secondary") {for (var i = 0; i < realHeader.length;i ++) {  
realHeader[i].innerHTML  = "<div class='header'><a href='https://ymcohen28.github.io/index.html'><img class='logo' title = 'Site Logo - Home Page' alt = 'Site Logo' id='logo-header' src='https://ymcohen28.github.io/logo.png' ></a><img class='nav' title = 'Mobile Site Navigation' alt = 'Site Navigation' id='openSmartphoneNav' src='https://ymcohen28.github.io/thingy.png' ><!--<table style=' float:right;'><tr><td><a class='head' href='/index.html'>Home</a></td><td><a class='head' href='/blog.html'>Blog</a></td><td><a class='head' href='/music.html'>My Music</a></td><td><a class='head' title = 'Note: This is for testing purposes only and will PROBABLY contain more bugs than the rest of the site!!' href='/test.html'>Test</a></td></tr></table>--></div>";}}
};
siteNavigation();
changeBodySize();
screen.addEventListener("orientationchange", siteNavigation());
screen.addEventListener("orientationchange", changeBodySize());
