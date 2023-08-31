var audioPlayer;
setInterval(check, 500)

const audioAssets = [
    "https://petersimpson.me/hosting/happy-saturday.mp3",
    "https://petersimpson.me/hosting/purple-cat.mp3",
    "https://petersimpson.me/hosting/silent-wood.mp3",
    "https://ia800603.us.archive.org/1/items/dystopiaq029/101mixtoorMaterialMusic.mp3",
    "https://ia800603.us.archive.org/1/items/dystopiaq029/102TheBrokeUnknownLisboa.mp3",
    "https://ia600603.us.archive.org/1/items/dystopiaq029/108SattSea.mp3",
    "https://ia800603.us.archive.org/1/items/dystopiaq029/112WhitewuFutility.mp3",
    "https://ia800603.us.archive.org/1/items/dystopiaq029/117knhbtznevermore.mp3",
    "https://ia600600.us.archive.org/27/items/78_whispering-grass-dont-tell-the-trees_ink-spots-jack-lawrence_gbia0020004/01%20-%20If%20I%20Didn%27t%20Care%20-%20Ink%20Spots%20-%20Jack%20Lawrence-restored.mp3",
    "https://ia902805.us.archive.org/8/items/78_liberty-inn-drag_art-hodes-and-his-orchestra-sidney-de-paris-brad-gowans-rod-cless_gbia0067697/01%20-%20Georgia%20Cake%20Walk%20-%20Art%20Hodes%20And%20His%20Orchestra.mp3",
    "https://ia902805.us.archive.org/8/items/78_liberty-inn-drag_art-hodes-and-his-orchestra-sidney-de-paris-brad-gowans-rod-cless_gbia0067697/07%20-%20%27Way%20Down%20Yonder%20In%20New%20O%20-%20Jimmie%20Noone%20And%20His%20Orchestra.mp3",
    "https://ia800801.us.archive.org/25/items/78_so-beats-my-heart_paul-weston-and-his-orchestra-dubin-warren_gbia0019122/01%20-%20I%20Only%20Have%20Eyes%20for%20You%20-%20Paul%20Weston%20and%20his%20Orchestra.mp3",
    "https://ia804503.us.archive.org/2/items/lp_the-guitars-of-srgio-and-eduardo-abreu_srgio-abreu-eduardo-abreu/disc1/01.02.%20Le%20Rosignol.mp3",
    "https://ia600405.us.archive.org/24/items/Nas_Instrumentals/Nas%20-%20The%20World%20Is%20Yours%20%28Instrumental%29.mp3",
    "https://ia800405.us.archive.org/24/items/Nas_Instrumentals/Nas%20-%20Life%27s%20A%20Bitch%20%28Arsenal%20Instrumental%29.mp3",
    "https://ia601501.us.archive.org/16/items/fear-in-the-dark-wml9jx/Manila%20Ice%20-%20Fear%20in%20the%20Dark%20-%2001%20Scorched%20Earth.mp3",
    "https://ia601501.us.archive.org/16/items/fear-in-the-dark-wml9jx/Manila%20Ice%20-%20Fear%20in%20the%20Dark%20-%2002%20Scumbag%20Delight.mp3",
    "https://ia801501.us.archive.org/16/items/fear-in-the-dark-wml9jx/Manila%20Ice%20-%20Fear%20in%20the%20Dark%20-%2004%20Helicopters%20in%20the%20Sky.mp3",
    "https://ia801501.us.archive.org/16/items/fear-in-the-dark-wml9jx/Manila%20Ice%20-%20Fear%20in%20the%20Dark%20-%2008%20Sunny%20Apocalypse.mp3",
    "https://ia601501.us.archive.org/16/items/fear-in-the-dark-wml9jx/Manila%20Ice%20-%20Fear%20in%20the%20Dark%20-%2010%20Struggle%20to%20Breathe.mp3",
    "https://ia802300.us.archive.org/12/items/py8xgw/Hallmark%20%2787%20-%20%EF%BC%A5%EF%BC%B0%EF%BC%A8%EF%BC%A5%EF%BC%AD%EF%BC%A5%EF%BC%B2%EF%BC%A1%EF%BC%AC%20%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD%EF%BC%B3%20-%2001%20%EF%BC%A4%EF%BC%A1%EF%BC%B9%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD.mp3",
    "https://ia802300.us.archive.org/12/items/py8xgw/Hallmark%20%2787%20-%20%EF%BC%A5%EF%BC%B0%EF%BC%A8%EF%BC%A5%EF%BC%AD%EF%BC%A5%EF%BC%B2%EF%BC%A1%EF%BC%AC%20%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD%EF%BC%B3%20-%2002%20%EF%BC%A2%EF%BC%A1%EF%BC%B9%EF%BC%B7%EF%BC%A1%EF%BC%B4%EF%BC%A3%EF%BC%A8.mp3",
    "https://ia902300.us.archive.org/12/items/py8xgw/Hallmark%20%2787%20-%20%EF%BC%A5%EF%BC%B0%EF%BC%A8%EF%BC%A5%EF%BC%AD%EF%BC%A5%EF%BC%B2%EF%BC%A1%EF%BC%AC%20%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD%EF%BC%B3%20-%2003%20%EF%BC%A2%EF%BC%A5%EF%BC%A1%EF%BC%A3%EF%BC%A8%20%EF%BC%B6%EF%BC%A9%EF%BC%A2%EF%BC%A5%EF%BC%B3.mp3",
    "https://ia902300.us.archive.org/12/items/py8xgw/Hallmark%20%2787%20-%20%EF%BC%A5%EF%BC%B0%EF%BC%A8%EF%BC%A5%EF%BC%AD%EF%BC%A5%EF%BC%B2%EF%BC%A1%EF%BC%AC%20%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD%EF%BC%B3%20-%2004%20%EF%BC%B4%EF%BC%A5%EF%BC%B3%EF%BC%B4%EF%BC%A1%EF%BC%B2%EF%BC%AF%EF%BC%B3%EF%BC%B3%EF%BC%A1.mp3",
    "https://ia802300.us.archive.org/12/items/py8xgw/Hallmark%20%2787%20-%20%EF%BC%A5%EF%BC%B0%EF%BC%A8%EF%BC%A5%EF%BC%AD%EF%BC%A5%EF%BC%B2%EF%BC%A1%EF%BC%AC%20%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD%EF%BC%B3%20-%2005%20%EF%BC%A2%EF%BC%AF%EF%BC%B5%EF%BC%AC%EF%BC%A5%EF%BC%B6%EF%BC%A1%EF%BC%B2%EF%BC%A4.mp3",
    "https://ia802300.us.archive.org/12/items/py8xgw/Hallmark%20%2787%20-%20%EF%BC%A5%EF%BC%B0%EF%BC%A8%EF%BC%A5%EF%BC%AD%EF%BC%A5%EF%BC%B2%EF%BC%A1%EF%BC%AC%20%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD%EF%BC%B3%20-%2007%20%EF%BC%A6%EF%BC%AC%EF%BC%A9%EF%BC%A3%EF%BC%AB%EF%BC%A5%EF%BC%B2.mp3",
    "https://ia902300.us.archive.org/12/items/py8xgw/Hallmark%20%2787%20-%20%EF%BC%A5%EF%BC%B0%EF%BC%A8%EF%BC%A5%EF%BC%AD%EF%BC%A5%EF%BC%B2%EF%BC%A1%EF%BC%AC%20%EF%BC%A4%EF%BC%B2%EF%BC%A5%EF%BC%A1%EF%BC%AD%EF%BC%B3%20-%2009%20%EF%BC%AC%EF%BC%B5%EF%BC%AE%EF%BC%A1%EF%BC%B2%20%EF%BC%B4%EF%BC%A9%EF%BC%A4%EF%BC%A5.mp3",
    "https://ia902300.us.archive.org/1/items/35-wn9ll7/Macroblank%20-%20%E7%B5%B6%E6%9C%9B%E3%81%AB%E8%B2%A0%E3%81%91%E3%81%9F%20-%2001%20%E7%A7%81%E3%81%8C%E5%BF%85%E8%A6%81%E3%81%AA%E3%81%AE%E3%81%AF%E6%99%82%E9%96%93.mp3",
];

function check(){
    const adBar = document.querySelector('.AdUnitView__adBar__badge');

    const currentlyPlaying = document.querySelector('.player-modal');

    if(currentlyPlaying){
        if(adBar){
            const adPlayer = document.querySelector('.AdPlayer--hidden');

            if(adPlayer && adPlayer.style.display != "inline-block"){
                adPlayer.style.display = "inline-block";
                switchIsAudioOff(true);
            }
        }else{
            const adPlayer = document.querySelector('.AdPlayer--hidden');
            if(adPlayer && adPlayer.style.display != "none"){
                adPlayer.style.display = "none";
                switchIsAudioOff(false);
            }
        }
    }else{
        console.log('NOT CURRENTLY IN VIDEO PLAYER');

        if(audioPlayer != null){
            audioPlayer.pause();
            audioPlayer.remove();
            audioPlayer = null;
        }
    }
}

function switchIsAudioOff(audioOff){
    if(!audioOff){
        if(audioPlayer != null){
            audioPlayer.pause();
            audioPlayer.remove();
            audioPlayer = null;
        }
    }


    document.querySelectorAll('audio, video').forEach(item => {
        item.muted = audioOff;
      });

    if(audioOff){
        const randomAudioAsset = audioAssets[Math.floor(Math.random() * audioAssets.length)];

        console.log("Selected audio asset URL: "+randomAudioAsset);

        if(audioPlayer == null){
            audioPlayer = new Audio(randomAudioAsset);
            audioPlayer.play();
        }
    }
}
