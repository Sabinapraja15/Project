const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('navLink');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('active');
});

const text = "Hi, I'm Ms.Sabina";
const typedText = document.getElementById('typed-text');
let index = 0;

function type(){
  if(index < text.length){
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type,150);
  }
}
type();

//projects
const projects = [
  {
    image: "gttt.jpg",
    title: "Animated Navbar",
    description: "A simple animated navbar using HTML, CSS, and JavaScript.",
  },
  {
    image: "gttt.jpg",
    title:"HTML CSS",
    description: "A simple project using HTML, CSS, and JavaScript.",
 },
 {
  image: "gttt.jpg",
  title: "Landing Pages",
  description: "A simple landing page using HTML, CSS, and JavaScript.",
 },
];
const container = document.getElementById("project-container");

projects.forEach(project=>{
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML= `
  <img src="${project.image}" alt="${project.title}"/>
  <h3>${project.title}</h3>
  <p>${project.description}</p>
    `;
    container.appendChild(card);
});

//services
const services=[
  {
    image:"gttt.jpg",
    title:"HTML Hosting",
    description:"You can have any thing here.",
  },
];
const container1= document.getElementById("service-container");
 services.forEach(service=>{
  const card1=document.createElement("div");
  card1.className="service-card";
  card1.innerHTML=`
  <img src="${service.image}" alt="${service.title}"/>
  <h3>${service.title}</h3>
  <p>${service.description}</P>
  `;
  container1.appendChild(card1);
});

//review
const reviews=[
{
  image: "gt1.jpg",
  title:"Elon Musk",
  description:"\"Great work very creative and professional\"",
},
{
  image: "gt1.jpg",
  title:"Mark Zuckerberg",
  description:"\"Love the design and animations.Highly recommended\"",
},
{
  image: "gt1.jpg",
  title:"Steve Jobs",
  description:"\"Clean code and responsive layout. Impressive\"",
},
];
const container2 = document.getElementById("review-container");
reviews.forEach(review=>{
  const card2= document.createElement("div");
  card2.className="card-review";
  card2.innerHTML=`
  <img src="${review.image}" alt="${reviews.title}"/>
  <h4>${review.title}</h4>
  <p>${review.description}</p>
  `;
  container2.appendChild(card2);
});