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
    videoId: "9lEDi6e_wK8", // Play the specified video directly
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// When the player is ready, start playing the video
function onPlayerReady(event) {
  event.target.playVideo();
}

// When the video state changes, check if it has ended and replay the video
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    // Replay the same video
    player.seekTo(0); // Seek to the beginning of the video
    player.playVideo();
  }
}

// Call the onYouTubeIframeAPIReady function to initialize the YouTube player
onYouTubeIframeAPIReady();
