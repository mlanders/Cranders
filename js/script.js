const hero = document.querySelector('.hero');
window.addEventListener('load', function(){
    TweenMax.to('.hero', 3,{
        opacity: 1
    })
})