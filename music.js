// This is function for controlling your custom audio player. 
// You will need the following elements: an audio element, without the controls showing; a input (type = "range"); a button for pausing; a button for skipping forward; a button for skipping backwards; and a list of elemnts with the same class name, for the songList, with the follwing attributes: data-name (the name to display), data-url (the url for this song), and data-number (These should start with 0 for the first one, and ascend in order from there. If it is not in order, or some of them are repeated, it could cause some funny mishaps!
// All of the following strings should be strings: the first is the id of the audio element, the second is the id of the input, the third is the id of the pause button, the fourth is the id of the skip BACK button, the fifth is the id of the skip FORWARD button, and the last is the CLASS name of the elements in the song list.

var playMusic = function(audio, progressBar, pause, skipBack, skipForward, songList) {
  
  // All the variables involved in making a custom audio player.
  var audio1 = document.getElementById(audio);
  var amount = document.getElementById(progressBar);
  var pausePlay = document.getElementById(pause);
  var prevSong = document.getElementById(skipBack);
  var nextSong = document.getElementById(skipForward);
  var getUrls = document.getElementsByClassName(songList);
  //This seems not to be needed: var sliderBackground = document.getElementById("slider-background1");   
  // This returns a dom node.
  var songSelected;
  // This keeps track of the number of the song in the playlist, for skipping song. 
  var songNumber = 0;
  getUrls[0].click();

  // This assigns an event listener to the skip back button, and calls the function.
  prevSong.addEventListener("click", function() {
      if (songNumber === 0)  {
        songNumber = 3;
      }
      else {
        songNumber -= 1;
      }
      getUrls[songNumber].click();
    }
  );
  
  // This assigns an event listener to the skip forward button, and calls the function.
  nextSong.addEventListener("click", function() {
      if (songNumber === 3)  {
        songNumber = 0;
      }
      else {
        songNumber += 1;
      }
      getUrls[songNumber].click();
    }
  );
  
  // a function that will update the audios time based on the progress bars value, and then calls that function when the mouse is either down or up (though I'm not sure about how much the second one works)    
  var update = function() {document.getElementById("testAudio").currentTime = amount.value*(audio1.duration/100);};
  
  amount.addEventListener("mousedown",update);
  amount.addEventListener("mouseup", update);
  
  // A function that will update the progress bar based on the audio's time, and then calls that function. (I also added some of other things that needed to be checked every so often.)
  var regUpdate = function() {amount.value = audio1.currentTime / (audio1.duration / 100);
                           if (audio1.currentTime === audio1.duration) {nextSong.click();}
                           if (audio1.currentTime === 0) {pausePlay.click();}};

  setInterval(regUpdate,400);
  
  // A function that will either pause or play the audio, depending on its current state, when the pause button is clicked; the function is then called.
  var pause = function() {
    if (audio1.paused) {
      audio1.play();
    }
    else {
      audio1.pause();
    }
  };
  pausePlay.addEventListener("click", pause);
   
  // Assigns names to the list of audio tracks.
  for (var i = 0; i < getUrls.length; i++) {
    getUrls[i].textContent = getUrls[i].dataset.name;
  }
  
  // A function that changes the background color if it is not selected, and then calls that function every 100 milliseconds
  var ifNotSelected = function() {
    for (var i = 0; i < getUrls.length; i++) {  
      if (songSelected !== getUrls[i]) {
        getUrls[i].style.color = 'blue';
        getUrls[i].style.backgroundColor = 'white';
      }
    }
  };
      
  setInterval(ifNotSelected,100);

  // Adds event listeners for each of the playlist list items to change the styling when it is either hovered over or selected
  for (var i = 0; i < getUrls.length; i++) { 
    // If the mouse has entered the song box, it will make the left border thicker
    getUrls[i].addEventListener('mouseenter', function() {
      this.style.borderLeft = "4px solid blue";
    });
    
    // If the mouse has left the song box, it will make the left border thinner
    getUrls[i].addEventListener('mouseleave', function() {
      if (this !== songSelected) {this.style.borderLeft = "2px solid blue";}
    });
  
    // If the song box was clicked, it will: A. Change the styling of that song. B. Change the styling of the song that was just clicked to make the border thinner, as it will only make it thinner when it registers a mouseleve, which it hasn't registered.  C. Tell the variables that it is clicked, used to know which elements to change the styling of, and what to skip to. 
    getUrls[i].addEventListener('click',function() {
      audio1.src = this.dataset.url;
      for (var j = 0; j < getUrls.length; j++) {
        getUrls[j].style.borderLeft = "2px solid blue";
      }
      this.style.borderLeft = "4px solid blue";
      this.style.backgroundColor = "lightBlue";
      this.style.color = "white";
      songSelected = this;
      songNumber = parseInt(this.dataset.number);
    });
  }
  // This sets the audio to initially be the first one in the list. 
  getUrls[0].click();
};
