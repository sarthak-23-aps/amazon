let allimages=document.querySelector(".imageslider");
let image=document.querySelectorAll(".img");
let index= 0;
let prevbtn=document.querySelector("#prevbtn")
let nxtbtn=document.querySelector("#nxtbtn")

prevbtn.addEventListener("click",function(){
    image.forEach(function(ima){
        ima.classList.remove("active")
    })
    index--;
    if(index < 0){
        index= image.length - 1
    }
    image[index].classList.add("active")
    
})

nxtbtn.addEventListener("click",function(){
    
    index++;
    if(index >= image.length){
        index= 0
    }
    image.forEach(function(ima){
        ima.classList.remove("active")
    })
    image[index].classList.add("active")
})

setInterval(function(){
    image[index].classList.remove("active")
    index++;
    if (index >= image.length) {
        index = 0;
    }
    image[index].classList.add("active")
},7000)

// for phone 

let imagebox2 = document.querySelector(".imageslider2")

let alldot=document.querySelectorAll(".dot")

let image2=document.querySelectorAll(".pic");

let idx=0

setInterval(function(){
    image2[idx].classList.remove("act")
    alldot[idx].classList.remove("act")
    idx++;
    if (idx >= image2.length) {
        idx = 0;
    }
    image2[idx].classList.add("act")
    alldot[idx].classList.add("act")
},5000)

let startX = 0
let endX = 0
imagebox2.addEventListener("touchstart",function(e){
    startX= e.changedTouches[0].screenX
})

imagebox2.addEventListener("touchend",function(e){
    endX= e.changedTouches[0].screenX

    let dist= endX - startX

    if(dist >50){
   image2[idx].classList.remove("act")
    alldot[idx].classList.remove("act");
   idx--;
   if(idx < 0){
      idx = image2.length -1 
   }
   image2[idx].classList.add("act")
   alldot[idx].classList.add("act");
} else if(dist < -50){
   image2[idx].classList.remove("act")
    alldot[idx].classList.remove("act");
   idx++;
   if(idx >= image2.length){
      idx = 0
   }
   image2[idx].classList.add("act")
   alldot[idx].classList.add("act");
}
})





