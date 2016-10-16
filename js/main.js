function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        width: '100%',
        height: 714,
        videoId: 'ht0Qus_hVSQ',
        playerVars: {
            color: 'white',
            playlist: 'taJ60kskkns,FG0fTKAqZ5g'
        },
        events: {
            onReady: initialize
        }
    });
}


function initialize(){
    $('#play').on('click', function () {
        $('.main-video img, #play').fadeOut(300);
            player.playVideo();    
        
    });
}

