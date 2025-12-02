const turtles = [
  {
    title: "Green Sea Turtle",
    desc: "The green sea turtle is known for its herbivorous diet and calm nature. It is often found near tropical coastlines and coral reefs.",
    img: "https://cdn.shopify.com/s/files/1/0996/1022/files/AdobeStock_176256068.jpg?v=1685473901"
  },
  {
    title: "Loggerhead Turtle",
    desc: "The loggerhead turtle has one of the strongest jaws among sea turtles.",
    img: "https://gardencityrealty.icnd-cdn.com/wp-content/uploads/2020/06/ocean-underwater-swim-biology-turtle-sea-turtle-707787-pxhere.com_.jpg"
  },
  {
    title: "Hawksbill Turtle",
    desc: "The hawksbill turtle is easily recognizable thanks to its sharp, bird-like beak.",
    img: "https://media.australian.museum/media/dd/images/Hawksbill_Sea_Turtle_RSwwfau.4379475.width-1600.b27001f.jpg"
  }
];

let currentIndex = 0;

function loadTurtle() {
  const t = turtles[currentIndex];
  document.getElementById("turtle-title").textContent = t.title;
  document.getElementById("turtle-desc").textContent = t.desc;
  document.getElementById("turtle-img").src = t.img;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % turtles.length;
  loadTurtle();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + turtles.length) % turtles.length;
  loadTurtle();
});

// On charge le premier
loadTurtle();
