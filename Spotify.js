console.log("welcome to Spotify");
let audioElemet = new Audio('song1.mp3');
let songIndex =0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Songs = [
    {songName: "Ve Mahi" ,filepath:"/home/himanshu/Documents/Internship Project/song1.mp3",coverPath:"cover.png"
    },
    {songName: "Challa" ,filepath:"/home/himanshu/Documents/Internship Project/song2.mp3",coverPath:"uri.jpg"
},
{songName: "With You" ,filepath:"/home/himanshu/Documents/Internship Project/song3.mp3",coverPath:"with.jpg"
},
{songName: "Ram Siya Ram" ,filepath:"/home/himanshu/Documents/Internship Project/song4.mp3",coverPath:"ram.jpg"
},

]

songItems.forEach((Element,i)=>{
    console.log(Element,i);
 Element.getElementsByTagName("img")[0].src = Songs[i].coverPath;
 Element.getElementsByClassName("songName")[0].innerText = Songs[i].songName;
}
)//

//audioElemet.play();//

// Handle play/pause
 masterPlay.addEventListener('click', ()=>{
    if (audioElemet.paused || audioElemet.currentTime <='0'){
        audioElemet.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
         
    }
    else{
        audioElemet.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
         

    }
 })

// listen the event

audioElemet.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // upadte seekbar
    progress = parseInt((audioElemet.currentTime/audioElemet.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
      
})  




myProgressBar.addEventListener('change', ()=>{
    audioElemet.currentTime = myProgressBar.value* audioElemet.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-play-circle');
        Element.classList.add('fa-pause -circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        console.log(e.target.id);
        makeAllPlays();
        index = parseInt(e.target)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElemet.src ='song${index}.mp3';
        audioElemet.currentTime = 0;
        audioElemet.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

    })
