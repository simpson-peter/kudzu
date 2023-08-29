console.log('hello!');

setInterval(check, 500)

function check(){
    const adBar = document.querySelector('.AdUnitView__adBar__badge');

    if(adBar){
        console.log('AD BAR FOUND');

        const adPlayer = document.querySelector('.AdPlayer--hidden');

        if(adPlayer && adPlayer.style.display != "inline-block"){
            adPlayer.style.display = "inline-block";
            switchIsAudioOff(true);
        }
    }else{
        console.log('AD BAR NOT FOUND');

        const adPlayer = document.querySelector('.AdPlayer--hidden');
        if(adPlayer && adPlayer.style.display != "none"){
            adPlayer.style.display = "none";
            switchIsAudioOff(false);
        }
    }
}

function switchIsAudioOff(audioOff){
    document.querySelectorAll('audio, video').forEach(item => {
        item.muted = audioOff;
      });

    if(audioOff){
        //var audioPlayer = document.createElement("AUDIO");
        var audioPlayer = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3");
        audioPlayer.id = "extension-audio-player";
        audioPlayer.play();
    }
}
