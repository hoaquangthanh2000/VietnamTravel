// $('.variable-width').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true
//   });
var headerNav = document.getElementById('main-nav-js')
        var mobiMenu = document.getElementById('mobile-menu')
        var closeMenu = document.querySelector('.header-close')
        function showListMenu (){
            headerNav.classList.add('open')
        }
        function removeIconMenu() {
            mobiMenu.classList.add('remove')
        }
        function removeIconClose() {
            closeMenu.classList.add('remove')
        }
        function removeListMenu (){
            headerNav.classList.remove('open')
        }
        function showIconClose (){
            closeMenu.classList.remove('remove')
        }
        function showIconMenu (){
            mobiMenu.classList.remove('remove')
        }
        mobiMenu.onclick = function(){
            showListMenu()
            removeIconMenu()
            showIconClose()
        }
        closeMenu.onclick = function(){
            removeListMenu()
            showIconMenu()
            removeIconClose()
        }

        // btn selector
        var wrapSelector = document.querySelector('.wrap-selector')
        var btnSelector = document.querySelector('.btn-selector')
        var inspiredNav = document.querySelector('.inspired-nav')
        function showSelector() {
            inspiredNav.classList.add('open')
        }
        function closeSelector() {
            inspiredNav.classList.remove('open')
        }
        btnSelector.onclick = function(){
            var isClose = wrapSelector.clientHeight === 30;
            if (isClose){
                showSelector()
            }
            else{
                closeSelector()
            }
        }

// chuyen slider
const slider = document.querySelector('.wrap-events')
const sliderMain = document.querySelector('.slider-events')
const sliderItems = document.querySelectorAll('.slider-event-item')
const dotItems = document.querySelectorAll('.dot-item')
const sliderItemWidth = sliderItems[0].offsetWidth
const slidesLength = sliderItems.length
let postionX = 0;
let index = 0;
        
[... dotItems].forEach((item) => 
    item.addEventListener("click", function(e){
        [... dotItems].forEach( (el) =>  el.classList.remove("active"));
        e.target.classList.add("active")
        const slideIndex = (e.target.dataset.index);
        index = slideIndex
        console.log(index)
        postionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`; 
    })
);

function handleChaneSlide(direction){
    if(direction === 1){
        if(index >= slidesLength - 1){
            index = slidesLength - 1
            return
        }
        postionX =postionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;   
        index++;
    }else if(direction ===-1){
        if(index <= -1){
            index = 0;
            return
        }
        postionX = postionX + sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
        index--;
    }
}


