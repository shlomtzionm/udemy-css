// 1
// let text= document.querySelector('.text') as HTMLElement
// let spans = text.innerText
// console.log(spans);



// 2
// let text = document.getElementById('text') as HTMLElement
// let leaf = document.getElementById('leaf') as HTMLElement
// let hill1 = document.getElementById('hill1') as HTMLElement
// let hill4 = document.getElementById('hill4') as HTMLElement
// let hill5 = document.getElementById('hill5') as HTMLElement
// window.addEventListener('scroll',()=>{
//     let value = window.scrollY
//     text.style.marginTop = `${value * 2.5}px`
//     leaf.style.top=`${value * -1.5}px`
//     leaf.style.left=`${value * 1.5}px`
//     hill5.style.left =`${value * 1.5}px`
//     hill4.style.left =`${value * -1.5}px`
//     hill1.style.top =`${value * 1}px`
// })





// 3
// let card = document.querySelector('.card') as HTMLElement
// let toggle = document.querySelector('.toggle') as HTMLElement
// toggle.addEventListener('click',()=>{
//     card.classList.toggle('active')
// })





//4
// let text = document.querySelector(".text") as HTMLElement
// let htmlSpans = text.innerText.split("").map((letter,i)=>{
//     return `<span style="animation-duration:${Math.random()* 5}s; filter:hue-rotate(${i * 50}deg)">${letter}</span>`
// }).join("")
// text.innerHTML= htmlSpans
// console.log(htmlSpans);








// 5
// let circle1 = document.querySelector(".circle1") as HTMLElement
// let circle2 = document.querySelector(".circle2") as HTMLElement
// window.addEventListener('scroll',()=>{
//     let scrollValue = window.scrollY;
//     circle1.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 0 0)`
//     circle2.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 100% 100%)`
// })






// 6
// let sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>
// window.addEventListener('scroll',()=>{
//     sections.forEach(sec=>{
//         let scrollDist = window.scrollY
//         let secDist = sec.offsetTop;

//         if(scrollDist >= secDist - 150){
//             sec.classList.add('show-animate')
//         }
//         else{
//             sec.classList.remove('show-animate')

//         }
//     })
// })






// 7
// let pattern = document.querySelector('.bg') as HTMLElement
// window.addEventListener('scroll',()=>{
//     pattern.style.backgroundPosition = window.scrollY + 'px'
// })







// 8
let section = document.querySelector('section')
let j = 0
while(j<150){
    let star = document.createElement('i')
    let x = Math.floor(Math.random()*window.innerWidth)
    star.style.left = `${x}px`

    let y = Math.floor(Math.random()*window.innerHeight)
    star.style.top = `${y}px`

    let size = Math.random()*4
    star.style.width = `${1 + size}px`
    star.style.height = `${1 + size}px`

let duration = Math.random() * 2
star.style.animationDuration = `${duration + 1}s`

    section?.appendChild(star)
    j++
}


