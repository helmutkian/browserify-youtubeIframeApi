# browserify-youtubeIframeApi

Provides a promise wrapper for the ``onYoutubeIframeApiReady`` callback. 

## *function* youtubeIframeApi()

### Return value

* Promise - Returns a Q.js promise with the readied API object

## Example

````javascript
var youtubeIframeApi = require('./youtubeIframeApi.js');

youtubeIframeApi()
    .then(function (ytApi) {
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
