console.log("it is running");

const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//TASK 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "grey";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");

//TASK2
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#009999";
topMenuEl.setAttribute("class", "flex-around");

//TASK3
menuLinks.forEach(function (menuLink) {
  const newLink = document.createElement("a");
  newLink.innerText = menuLink.text;
  newLink.setAttribute("href", menuLink.href);
  console.log(newLink);
  topMenuEl.appendChild(newLink);
  newLink.style.fontSize = "1.5rem";
});
