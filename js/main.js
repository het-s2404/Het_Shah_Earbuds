(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
  
  
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
  
    const model = document.querySelector("#beats-ar");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const InfoBoxes = [
      {
        title: "New touch sensor for volume.",
        text: "Slide finger up to increase and Down to decrease the volume.",
        image: "../images/hotspot.svg",
      },
      {
        title: "Smart touch power button",
        text: "Smart touch to power on/off the buds and for better audio u can change modes. ",
        image: "../images/hotspot.svg",
      },
      {
        title: "Ear comfort with soft cushioning",
        text: "A soft cushioned and comfort for ears as well as transparency mode that allows to block external sounds.",
        image: "../images/hotspot.svg",
      },
      {
        title: "Fast charging",
        text: "A fast charging point which helps to charge buds in 30 minutes.",
        image: "../images/hotspot.svg",
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
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  
    //hotspots- end
  
  
  })();