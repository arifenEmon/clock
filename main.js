// let div = document.querySelector('#wow');

// div.addEventListener('click',ani )

// function ani (event){
//     let value = event.offsetX
//     let value2 = event.offsetY;
//     document.body.style.background = `#${value2}`
//     this.style.background = `#${value}`
// }

let cDisplay = document.querySelector('.cDisplay h1');


function clock(){
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = 'AM'

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour -12;
        session = 'PM'
    }

    if(hour < 10){
        hour = '0' + hour
    }
    if(min < 10){
        min = '0'+min
    }
    if(sec < 10){
        sec = '0' + sec
    }
    var nowTime = hour + ':' + min + ':' + sec + ' ' +session
    cDisplay.innerHTML = nowTime
     
}
setInterval(clock,500)

let show = document.querySelector('#colorS')
document.querySelector('#click-btn').addEventListener('click', function(){
    show.classList.toggle('add');
})
 

let colorBtn = document.querySelectorAll('.btn-grp button')

for(let x = 0; x < colorBtn.length; x++){
    
    colorBtn[x].addEventListener('click', function(){
        let  c = window.getComputedStyle(colorBtn[x]).backgroundColor
        document.body.style.background = c
    })
}

let relode = document.querySelector('.relode button');

relode.addEventListener('click' , function(){
    window.location.reload()
})

let magic = document.querySelector('.magic button')
magic.addEventListener('mousemove',coll)


function coll(event){
    let value = event.offsetX;
    document.body.style.background = `#${value}`
}