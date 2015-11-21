# browserify-youtubeIframeApi

Provides a wrapper for the ``onYoutubeIframeApiReady`` callback. 

## *function* youtubeIframeApi(fn)

### Arguments

* **fn** - A function that takes in the ready-to-use Youtube Iframe API object (aka ``window.YT``).

## Example

````javascript
var youtubeIframeApi = require('./youtubeIframeApi.js');

youtubeIframeApi(function (ytApi) {
    var player = new ytApi.Player('player', {
      width: 1280,
      height: 720,
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
  });
});
````
