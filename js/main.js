(() => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

      //Scroll-Trigger

      const canvas = document.querySelector("#promo-video");

      context = canvas.getContext("2d");
      
      canvas.width = 1920;
      canvas.height = 1080;
      
      const frameCount = 84; 
      
      const images = []; 
      
      const buds = {
       frame: 0
      }
      
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `promo/Earbuds${(i + 1).toString().padStart(4, "0")}.png`;
        images.push(img);
       }
      
       gsap.to(buds, {
        frame: 83,
        snap: "frame",
        scrollTrigger: {
          trigger: "#promo-video",
          pin: true,
          scrub: 1,
          start: "top top", 
        },
      
        onUpdate: render
      
           })
      
           images[0].addEventListener("load", render);
      function render(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        console.log(images[buds.frame]);
        context .drawImage(images[buds.frame], 0, 0);
      }

  // GSAP animations 

gsap.to(".hero-text", {
duration: 2,
opacity: 1,
y: -50,
ease: "power3.out",
scrollTrigger: {
  trigger: ".hero-text",
}
});

gsap.fromTo(
".hero",
{ backgroundSize: "100%" }, 
{ 
  backgroundSize: "110%", 
  duration: 5,          
  ease: "power1.inOut" 
}
);

  const navLinks = document.querySelectorAll("#main-header nav ul li a");

  function scrollLink(e) {    
          e.preventDefault(); 
          console.log(e.currentTarget.hash);
          let selectedLink = e.currentTarget.hash;
          gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
  }

  navLinks.forEach((link) => {
      link.addEventListener("click", scrollLink);
  });

  // hotspots- start

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const InfoBoxes = [
    {
      title: "New touch sensor for volume.",
      text: "Slide finger up to increase and Down to decrease the volume.",
    },
    {
      title: "Smart touch power button",
      text: "Smart touch to power on/off the buds and for better audio u can change modes. ",
    },
    {
      title: "Ear comfort with soft cushioning",
      text: "A soft cushioned and comfort for ears as well as transparency mode that allows to block external sounds.",
    },
    {
      title: "Fast charging",
      text: "A fast charging point which helps to charge buds in 30 minutes.",
    },
  ];

  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    InfoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;

      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  //hotspots- end


//XRAY

const divisor = document.querySelector('#divisor');
const slider = document.querySelector('#slider');
const xray = document.querySelector('#xray');


function moveDivisor() {
  console.log(slider.value);
  divisor.style.width = `${slider.value}%`;
}

slider.addEventListener('input', moveDivisor);



// Color Swap

const earbuds = document.querySelector("#beats");
const buttons = document.querySelectorAll("#color-con button");

function swapColor(e) {
console.log(e.currentTarget.id);
const selected =e.currentTarget.id;
earbuds.src = `images/${selected}.png`;
}

buttons.forEach(button => {
button.addEventListener("click", swapColor);
})



})();