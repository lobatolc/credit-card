const github = document.getElementById('github');

github

github.addEventListener('click', (event)=>{
    event.preventDefault();
    window.open('https://github.com/lobatolc', 'blank')
});

let startOrientation = 5;




document
.querySelector("body")
.addEventListener("mousemove", function thing(e) {
    const w = e.x / window.innerWidth *10
    const h = e.y  / window.innerHeight  * 10
    const scaleW = x => x*80 - 40
    const scaleH = x => x*-80 + 40
    document.querySelector(".card")
    .style
    .transform = `translate(-50%, -50%)rotateY(${scaleW(w)}deg)rotateX(${scaleH(h)}deg)`
})



