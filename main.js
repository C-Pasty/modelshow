// Load the YouTube Iframe API asynchronously
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create the YouTube player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "smMjyIJPMNI",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// When the player is ready, start playing the first video
function onPlayerReady(event) {
  event.target.playVideo();
}

// When the video state changes, check if it has ended and play the next video
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    // Check if the current video is the first video
    if (player.getVideoData().video_id === "smMjyIJPMNI") {
      // Play the second video
      player.loadVideoById("9lEDi6e_wK8");
    } else {
      // Play the first video
      player.loadVideoById("smMjyIJPMNI");
    }
  }
}

// Loop the videos
function loopVideos() {
  // Play the first video
  player.loadVideoById("smMjyIJPMNI");
}

// Call the loopVideos function to start the looping
loopVideos();
