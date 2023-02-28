import './less/index.less'

// Your code goes here!
console.log("can you see me?");

window.onload = function (evt){
    console.log(`event ${evt.type} fired! ready to go!`)
    const heading = document.querySelector('h1');
    heading.textContent = 'Ready to go!'

window.addEventListener('copy', () => {
    navigator.clipboard.readText() 
    .then(text => {
        heading.textContent += text;
    })
})
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror');

})

document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ''
})
window.addEventListener('keydown', evt =>{
   if(evt.key == 6){
    document.body.innerHTML = '<h1>HOW DARE YOU!</h1>'
   }
})

document.body.addEventListener('mousemove', evt => {
  
    const { clientX , clientY } = evt
    // console.log(`mouse is at ${clientX}, ${clientY}`);
})
//research throttle (performance issue)

const destinations = document.querySelectorAll('.destination')
for (let destination of destinations){
    destination.addEventListener('mouseenter', evt => {
      destination.style.fontWeight ='bold';
     

    })
    destination.addEventListener('mouseleave', () =>{
        setTimeout(()=>{
            destination.style.fontWeight = 'initial';
        },500)
    })
}

}
