console.log("it is running");

const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",

    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//TASK 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");

//TASK2
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.setAttribute("class", "flex-around");

//TASK3
menuLinks.forEach(function (menuLink) {
  const newLink = document.createElement("a");
  newLink.innerText = menuLink.text;
  newLink.setAttribute("href", menuLink.href);
  //console.log(newLink);
  topMenuEl.appendChild(newLink);
  newLink.style.fontSize = "1.5rem";
});

//TASK4
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class", "flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//TASK5
const topMenuLinks = document.querySelectorAll("#top-menu a");
//console.log(topMenuLinks)
let showingSubMenu = false;
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  if (link.tagName !== "A") {
    return;
  }
  //console.log(link.tagName);
  //console.log(link.innerText);
  // Q down
  if (link.classList.contains("active")) {
    link.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  //5.4
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  //5.5
  link.classList.add("active");
  // Q  5.6 -5.7
  // if (link.innerText !== menuLinks[0].text) {
  //   showingSubMenu = true;
  //   buildSubMenu(link.subLinks);
  //   subMenuEl.style.top = "100%";
  // } else {
  //   subMenuEl.style.top = "0%";
  //   mainEl.innerHTML = '<h1>about</h1>';
  // }
  const linkObject = menuLinks.find((linkObj) => {
    return linkObj.text.toUpperCase() === link.innerText;
  });

  if (linkObject.subLinks) {
    showingSubMenu = true;
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    mainEl.innerHTML = `<h1>${link.textContent.toLowerCase()}</h1>`;
  }
});

//5.8
function buildSubMenu(subLink) {
  subMenuEl.innerHTML = "";
  subLink.forEach(function (subL) {
    let newSubLink = document.createElement("a");
    newSubLink.innerText = subL.text;
    newSubLink.setAttribute("href", subL.href);
    subMenuEl.appendChild(newSubLink);
  });
}

//TASK6;
subMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (link.tagName !== "A") {
    return;
  }
  console.log(link.innerText);
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  topMenuLinks.forEach(function (e) {
    link.classList.remove("active");
  });
  mainEl.innerHTML = "<h1>${link.innerText}</h1>";
});
