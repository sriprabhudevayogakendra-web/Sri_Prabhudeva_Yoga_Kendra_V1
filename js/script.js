/* =====================================
   SRI PRABHUDEVA YOGA KENDRA
   JAVASCRIPT
===================================== */



// MOBILE MENU


function toggleMenu(){

    const nav=document.getElementById("nav");

    nav.classList.toggle("active");

}




// CLOSE MOBILE MENU WHEN CLICKING LINK


document.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener("click",()=>{

        document
        .getElementById("nav")
        .classList.remove("active");

    });


});






// SCROLL ANIMATION


const fadeElements=document.querySelectorAll(".fade");


const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},{
    threshold:.15
});



fadeElements.forEach(element=>{

    observer.observe(element);

});







// COUNTER ANIMATION


const counters=document.querySelectorAll(".counter");



const counterObserver=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


let counter=entry.target;

let target=+counter.dataset.target;


let current=0;


let increment=Math.ceil(target/100);



let timer=setInterval(()=>{


current+=increment;



if(current>=target){

current=target;

clearInterval(timer);

}



counter.innerText=current;



},20);



counterObserver.unobserve(counter);



}



});



},{
threshold:.5
});



counters.forEach(counter=>{

counterObserver.observe(counter);

});








// GALLERY LIGHTBOX


const galleryImages=document
.querySelectorAll(".gallery-item img");



const lightbox=document
.getElementById("lightbox");


const lightboxImage=document
.getElementById("lightbox-img");




galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


lightbox.style.display="flex";


lightboxImage.src=image.src;


});


});





function closeLightbox(){


lightbox.style.display="none";


}







// CLOSE LIGHTBOX BY CLICKING OUTSIDE IMAGE


lightbox.addEventListener("click",(e)=>{


if(e.target===lightbox){

closeLightbox();

}


});
