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