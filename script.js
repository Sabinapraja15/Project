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