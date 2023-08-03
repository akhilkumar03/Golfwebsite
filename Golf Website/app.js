let cur = document.querySelector("#cursor")
let curb = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(p){
    // console.log(p)
    cur.style.left = p.x+ 20+ "px"
    cur.style.top = p.y+ "px"
    curb.style.left = p.x - 150 +  "px"
    curb.style.top = p.y - 150 + "px"
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cur.style.scale = 3;
    cur.style.border = "1px solid #fff";
    cur.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cur.style.scale = 1;
    cur.style.border = "0px solid #95C11E";
    cur.style.backgroundColor = "#95C11E";
  });
});


gsap.to("#nav",{
    backgroundColor: "#000",
    height : "100px",
    duration : 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller : "body",
        // markers: true,
        start : 'top -10%',
        end: "top -11%",
        scrub : 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start:"top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".cards", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon1", {
    y: -50,
    x: -50,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 50,
    x: 50,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
