function Anima(){
    gsap.from(".card",{
        y: 50, // any properties (not limited to CSS)
    
        duration: 1, // seconds
        delay: 0.1,
        ease: "power2.inOut",
        stagger: 0.1, // stagger start times
    
    })
}
Anima();