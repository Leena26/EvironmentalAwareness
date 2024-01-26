const body = document.querySelector("body");
const navbar = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const backTop = document.querySelector(".back2top");

menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
  console.log("hi")
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");

}


window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  this.scrollY > 20 ? backTop.classList.add(".show") : backTop.classList.remove(".show") ;
}