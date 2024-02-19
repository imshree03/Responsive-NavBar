let nav = false;

const handleClick = () => {
  const menuLinks = document.querySelector(".menuLinks");
  const line1 = document.querySelector("#line1");
  const line2 = document.querySelector("#line2");
  const line3 = document.querySelector("#line3");
  const background = document.querySelector(".background");
  if (nav) {
    menuLinks.style.cssText = "right:100%;transition:all 0.4s";
    line1.style.cssText = "transform:rotate(0deg);";
    line2.style.cssText = "transform:rotate(0deg);";
    line3.style.cssText = "display:block";
    background.style.cssText = "margin-top:-12px;";
  } else {
    menuLinks.style.cssText = "right:0%;transition:all 0.4s";
    line1.style.cssText = "transform:rotate(45deg);";
    line2.style.cssText = "transform:rotate(-45deg);margin-top:-7px";
    line3.style.cssText = "display:none";
    background.style.cssText = "margin-top:-20px;transform:scale(50)";
  }
  nav = !nav;
};
