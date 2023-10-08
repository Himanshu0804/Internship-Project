font-family: 'Roboto', sans-serif;


// Update Seekbar
progress = parseInt((audioElemet.currentTime/audioElemet.duration)*100);
console.log('progress');
myProgressBar.value = progress;



{songName: " re Ve Mahi" ,filepath:"/home/himanshu/Documents/Internship Project/song1.mp3",coverPath:"cover.png"
},
{songName: "Ve Mahi sanu khendi" ,filepath:"/home/himanshu/Documents/Internship Project/song1.mp3",coverPath:"cover.png"
},
{songName: "Ve Mahi deh h shiva" ,filepath:"/home/himanshu/Documents/Internship Project/song1.mp3",coverPath:"cover.png"
},



const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
           Element.classList.remove('fa-circle-pause');
           Element.classList.add('fa-circle-play');
   
   
       }
       ) 
   }    
})