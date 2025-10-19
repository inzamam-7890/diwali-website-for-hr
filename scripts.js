// 1. इमेज स्लाइडर लॉजिक
const images = [
  "url('diwali-1.jpg.jpg')", // Ensure these paths are correct!
  "url('diwali-2.jpg.jpg')",
  "url('diwali-3.jpg.jpg')",
  "url('diwali-4.jpg.jpg')",
  "url('diwali-5.jpg.jpg')"
];

let currentImageIndex = 0;
const websiteBackground = document.getElementById('website-background');

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  websiteBackground.style.backgroundImage = images[currentImageIndex];
}

// Change image every 7 seconds
setInterval(changeBackgroundImage, 7000);

// Load the first image immediately
websiteBackground.style.backgroundImage = images[currentImageIndex];


// 2. Particles.js (Snow/Firework Effect) Configuration
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffd700" // Gold color for particles (like fire sparks)
    },
    "shape": {
      "type": "star", // Could be "circle", "triangle", "polygon", "star"
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.7, // Transparency of particles
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, // Size of particles
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false, // No lines between particles
    },
    "move": {
      "enable": true,
      "speed": 3, // Speed of particles
      "direction": "bottom", // Particles fall downwards (like snow/light firework dust)
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" // Particles move away on hover
      },
      "onclick": {
        "enable": true,
        "mode": "push" // New particles are pushed on click
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100, // How far particles are pushed away
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});