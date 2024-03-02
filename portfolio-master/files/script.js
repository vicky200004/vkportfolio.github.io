
var typed = new Typed(".text", {
    strings: ["Cyber Security" , "Networking" , "Business"],
    typeSpeed:60,
    backSpeed:60,
    backDelay:500,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

setTimeout(function () {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('main-content').classList.add('show');
}, 1000);