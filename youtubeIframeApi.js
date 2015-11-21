var Q = require('q');

var apiDeferred = Q.defer();

window.onYouTubeIframeAPIReady() = onYouTubeIframeAPIReady;

function onYouTubeIframeAPIReady() {
  apiDeferred.resolve(window.YT);
}

function useYouTubeIframeApi(fn) {
    return apiDeferred.promise
	.then(function (ytApi) {
	    fn(ytApi);
	});
}

module.exports = useYouTubeIframeApi;
