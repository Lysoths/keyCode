const lettercode = document.querySelector(".lettercode");
const container = document.querySelector(".container");
const harf = document.querySelector(".harf");
const kod = document.querySelector(".kod");

window.addEventListener("keydown", (e) => {
  harf.textContent = `${e.key}   = `; 
  kod.textContent = `  ${e.keyCode}  ` ; 
  
  console.log(e);      
});
