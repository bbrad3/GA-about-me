console.log('hello from app.js');

const copyEmail = document.querySelector('#copyEmail');

copyEmail.addEventListener('click', () => {
    const text = copyEmail.innerText;
    console.log(text);
    navigator.clipboard.writeText(text);
    alert("Copied " + text + " to clipboard.")
});

// this needs to be more DRY
const mainSection = document.querySelectorAll('main section');

mainSection[0].addEventListener('mouseover', () => {
    const section = document.querySelector('#main-background');
    section.style.backgroundColor="rgba(255, 127, 80, 0.3)";
});
mainSection[1].addEventListener('mouseover', () => {
    const section = document.querySelector('#main-experience');
    section.style.backgroundColor="rgba(255, 127, 80, 0.3)";
});
mainSection[2].addEventListener('mouseover', () => {
    const section = document.querySelector('#main-goals');
    section.style.backgroundColor="rgba(255, 127, 80, 0.3)";
});
mainSection[3].addEventListener('mouseover', () => {
    const section = document.querySelector('#main-hobbies');
    section.style.backgroundColor="rgba(255, 127, 80, 0.3)";
});

mainSection[0].addEventListener('mouseout', () => {
    const section = document.querySelector('#main-background');
    section.style.backgroundColor="rgb(217, 222, 233)";
});
mainSection[1].addEventListener('mouseout', () => {
    const section = document.querySelector('#main-experience');
    section.style.backgroundColor="rgb(217, 222, 233)";
});
mainSection[2].addEventListener('mouseout', () => {
    const section = document.querySelector('#main-goals');
    section.style.backgroundColor="rgb(217, 222, 233)";
});
mainSection[3].addEventListener('mouseout', () => {
    const section = document.querySelector('#main-hobbies');
    section.style.backgroundColor="rgb(217, 222, 233)";
});