var player;
    
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '350',
          width: '615',
          videoId: '3-aM0DrLuuw?rel=0&amp;controls=0&amp;showinfo=0&modestbranding=1',
          events: {
            'onStateChange': function(event) {
              if (event.data == YT.PlayerState.PLAYING) {
                 $('.vid').removeClass('isAngled');
              } else {
                 $('.vid').addClass('isAngled');
              }
            }
          }
        });
      }
