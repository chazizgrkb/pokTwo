(function () {
	'use strict';

	var supportsVideo = !!document.createElement('video').canPlayType;

	if (supportsVideo) {

		var videoContainer = document.getElementById('videoContainer');
		var video = document.getElementById('video');
		var videoControls = document.getElementById('video-controls');

		video.controls = false;

		videoControls.setAttribute('data-state', 'visible');

		var playpause = document.getElementById('playpause');
		var mute = document.getElementById('mute');
		var progress = document.getElementById('progress');
		var progressBar = document.getElementById('progress-bar');

		var supportsProgress = (document.createElement('progress').max !== undefined);
		if (!supportsProgress) progress.setAttribute('data-state', 'fake');

		

		if (document.addEventListener) {
			video.addEventListener('loadedmetadata', function() {
				progress.setAttribute('max', video.duration);
			});

			var changeButtonState = function(type) {

				if (type == 'playpause') {
					if (video.paused || video.ended) {
						playpause.setAttribute('data-state', 'play');
					}
					else {
						playpause.setAttribute('data-state', 'pause');
					}
				}

				else if (type == 'mute') {
					mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
				}
			}


			video.addEventListener('play', function() {
				changeButtonState('playpause');
			}, false);
			video.addEventListener('pause', function() {
				changeButtonState('playpause');
			}, false);
			

			
			playpause.addEventListener('click', function(e) {
				if (video.paused || video.ended) video.play();
				else video.pause();
			});			

			
			mute.addEventListener('click', function(e) {
				video.muted = !video.muted;
				changeButtonState('mute');
			});
			

			video.addEventListener('timeupdate', function() {
				if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
				progress.value = video.currentTime;
				progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
			});

			progress.addEventListener('click', function(e) {
				var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
				video.currentTime = pos * video.duration;
			});

			
		}
	 }

 })();