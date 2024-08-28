const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    // markers:true,
    pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')



tl.to("#row-div-2",{
    marginTop: "-5%"
},'a')
tl.to("#row-div-3",{
    marginTop: "-2%"
},'a')
tl.to("#row-div-4",{
    marginTop: "-8%"
},'a')
tl.to("#row-div-5",{
    marginTop: "-10%"
},'a')
tl.to(".overlay-div h1",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 50%",
    end:"100% 50%",
    scrub:true,
}})

tl2.to(".rounded-div-wrapper",{
 height :0,
 marginTop:"0px"
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-4",
        start:"50% 50%",
        end: "200% 50%",
        // markers: true,
        scrub: 1,
        pin :true
    },  
});

tl4.to(".c1",{
    marginTop:"-25%",
    opacity:"1"
} , 'a1')

tl4.to(".c2",{
    opacity:"1"
} , 'a2')
tl4.to(".c1",{
    marginTop:"-100%",
    opacity:0
} , 'a2')


tl4.to(".c3",{
    opacity:1
} , 'a3')

tl4.to(".c2",{
    opacity:'0'
} , 'a3')
tl4.to(".c1",{
    marginTop:"-180%",
} , 'a3')
tl4.to(".c1",{
    marginTop:"-230%",
} , 'a4')
tl4.to(".c3",{
    opacity:'0'
} , 'a4')

tl4.to(".cir-part-4",{
    marginLeft:"100%",
    rotate: -360
}, 'a4')

tl4.to(".cir-part-4",{
    rotate: 360
}, "a1")
tl4.to(".cir-part-4",{
    rotate: -360
}, 'a2')
tl4.to(".cir-part-4",{
    rotate: 360
}, "a3")


let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-5",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl5.to(".part-5 .text-area-hover h1",{
    width:"100%",
})
tl5.to(".part-5 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})

let tl6txt = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-6",
        start:"0% 50%",
        end: "20% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl6txt.to(".part-6 .text-area-hover h1",{
    width:"100%",
})
tl6txt.to(".part-6 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-6",
        start:"0% 70%",
        end: "15% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl6.to(".rounded-div-wrapper-6",{
    height:"0%",
    marginTop: 0,
})


let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-7",
        start:"50% 50%",
        end: "200% 50%",
        // markers: true,
        scrub: 1,
        pin:true
    },  
});

tl7.to(".our-work-txt-div",{
    height:"60vh",
},'a')
tl7.to(".our-work-txt",{
    height:"60vh",
},'a')
tl7.to("#our",{
   left:"0%"
},'a')
tl7.to("#work",{
   right:"0%"
},'a')
tl7.to(".scroll-img",{
   marginTop:"-400%",
})

