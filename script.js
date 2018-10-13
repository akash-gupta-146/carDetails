// database
var images = ['blue.jpg','grey.jpg','red.jpg','silver.jpg']
var colors = ['blue','gray','red','silver']
var overall_rating = 88

// pointing variables
var image = document.getElementById('car_img')
var selectors = document.getElementsByClassName('color_selector')

// events for color selectors
for(let i=0 ; i<selectors.length; i++){
    selectors[i].style.background = colors[i];
    selectors[i].addEventListener('click',function(){
        image.setAttribute('src',`assets/${images[i]}`)
        for(let j=0 ; j<selectors.length; j++){
            selectors[j].classList.remove('active')
        }
        selectors[i].classList.add('active')
    })
}

// function to set value for infograph meter
(function(){
    var meter_value = overall_rating*1.8;
    var meter_pin = document.getElementById('pin')
    meter_pin.style.transform = `rotate(${meter_value}deg)`
})();

