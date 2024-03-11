// let button=document.querySelector("button");
// let h3=document.querySelector("h3");

// button.addEventListener("click",function(){
//     let red=Math.floor(Math.random() * 255);
//     let green=Math.floor(Math.random() * 255);
//     let blue=Math.floor(Math.random() * 255);

//     h3.innerText=`rgb (${red},${green},${blue})`;
//     let div=document.querySelector("div");
//     div.style.backgroundColor=`rgb(${red},${green},${blue})`;
// });
let body = document.querySelector("body");
body.addEventListener("keydown", function (event) {
  // Check if the pressed key is the spacebar
  if (event.key === " " || event.code === "Spacebar") {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let p = document.querySelector("p");
    let h3 = document.querySelector("h3");
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    p.innerText = `rgb (${red},${green},${blue})`;

    if ((red + green + blue) / 3 < 128) {
      console.log("color is dark");
      p.style.color = 'white';
      h3.style.color = 'white';
    }else{
        console.log("color is bright");
      p.style.color = "black";
      h3.style.color = "black";
    }
  }
});

let p=document.querySelector("p");
p.addEventListener("click",function(){
  let text=p.innerText;
  if(text!="Press Spacebar"){
    navigator.clipboard.writeText(text);
    p.innerText="copied!";
    setTimeout(() => {
      this.textContent = text;
   }, 1000); 
  }
});