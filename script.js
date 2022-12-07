let divven = document.getElementById("divven");
let bigDaddyDiv = document.getElementById("bigDaddyDiv");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

play.addEventListener("click", () => animation.play());
pause.addEventListener("click", () => animation.pause());
reset.addEventListener("click", () => animation.reset());

const animation = anime({
  targets: "div",
  translateX: 5,
  translateY: 5,
  //CSS prop 1
  borderRadius: 50,
  //CSS prop 2
  backgroundColor: "hsl(330, 100%, 71%)",
  //CSS prop 3
  border: "dotted 10px orange",
  margin: "50px",
  duration: 5000,
  easing: "linear",
  direction: "alternate",
});
