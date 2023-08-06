var mainDiv = document.querySelector('#entry-part')
var text = document.querySelector('#logoText')
var img = document.querySelector('#guyImg')

// console.dir(text);

let move = () => {
    text.style.display='block'
    setTimeout(() => {
        text.style.transform = 'translateX(0%)'
        img.style.transform = 'translateX(0)'
    },300)
    
}

mainDiv.addEventListener('mousemove', () => {
    move();
})

mainDiv.addEventListener('touchmove', () => {
    move();
})

