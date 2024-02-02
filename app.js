const headerContainer = document.querySelector(".header-container");
const header = document.querySelector(".header-child");
const hamburger = document.querySelector(".hamburger")
const hamburgerIcon = document.querySelector("#hamburger-icon")
const closeIcon = document.querySelector("#close-icon")
const hamburgerList = document.querySelector(".hamburger-links")
const messageBox = document.querySelector(".message-box")

hamburger.addEventListener('click', ()=>{
    header.classList.toggle('hamburger-active-background');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    hamburgerList.classList.toggle('hidden');
    hamburgerList.classList.toggle('hamburger-list-active');
    messageBox.classList.toggle('hidden');
})