const menuBurger = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");
const bgShorten = document.querySelector(".bg-shorten");
const bgBoost = document.querySelector(".bg-boost");

const urlUser = document.querySelector("#input-url");
const btnShortlink = document.querySelector("#btn-shortlink");

const containerShortlink = document.querySelector("#container-shortlink");

menuBurger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

if (window.innerWidth > 1024) {
  bgShorten.setAttribute("src", "images/bg-shorten-desktop.svg");
  bgShorten.classList.add("w-full", "h-full");
  bgBoost.setAttribute("src", "images/bg-boost-desktop.svg");
}

// ketika tombol diklik
btnShortlink.addEventListener("click", () => {
  const apiUrl = `https://tinyurl.com/api-create.php?url=${urlUser.value}`;

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      if (data === "Error") {
        return alert("invalid urls");
      }
      const div = document.createElement("div");
      div.classList.add(...classDiv);
      div.innerHTML = tamplate(urlUser.value, data);
      containerShortlink.appendChild(div);
      
      const btnCopy = document.querySelector(".btn-copy-link")
    
      btnCopy.forEach(btn => {
        btn.addEventListener("click", function (e) {
        let copy = e.target.previousElementSibling.innerText;
        navigator.clipboard.writeText(copy);
        alert("copyned")
    }
    
    });
});

const classDiv = ["card-shortlink", "bg-white", "py-5", "flex", "flex-col", "gap-3", "rounded-md", "lg:flex-row", "lg:items-center", "lg:justify-between"];
function tamplate(longLink, shortLink) {
  return (tamp = `<div class="link-user text-verydarkblue font-poppins border-b border-gray pb-2 px-5 lg:border-none lg:pb-0">${longLink}</div>
<div class="flex flex-col gap-2 lg:items-center lg:flex-row ">
  <div class="link-shortlink text-cyan font-poppins px-5">${shortLink}</div>
  <button  class=".btn-copy-link text-lg text-white font-poppins bg-cyan rounded-md hover:bg-opacity-80 active:scale-95 transition duration-200 py-1.5 mx-5 lg:px-10 active:bg-darkviolet">
    copy
  </button>
</div>`);
}
