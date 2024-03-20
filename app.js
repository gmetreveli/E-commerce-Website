const wrapper = document.querySelector(".sliderWrapper");
const navBottom = document.querySelector(".navBottom");
const menuItems = document.querySelectorAll(".menuItem");
const fLists = document.querySelectorAll(".fList");
const fListItems = document.querySelectorAll(".fListItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");
const lang = document.querySelector(".languages");
const links = document.querySelectorAll(".ena");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let data = {
  georgian: {
    title: ["ეარ ფორსი", "ჯორდანი", "ბლეიზერი", "კრატერი", "ჰიპი"],
  },
  english: {
    title: ["Air Force", "Jordan", "Blazer", "Crater", "Hippie"],
  },
};

links.forEach((link) => {
  link.addEventListener("click", () => {
    lang.querySelector(".active").classList.remove("active");
    link.classList.add("active");

    let attr = link.getAttribute("language");
    menuItems.forEach((item, index) => {
      item.textContent = data[attr].title[index];
    });
    let flistItemProds = [...fLists[fLists.length - 1].children];
    flistItemProds.forEach((item, index) => {
      item.textContent = data[attr].title[index];
    });
  });
});

let chosenProduct = products[0];
let chosenTitle = data.georgian.title[0];

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //Change active slide underline
    navBottom.querySelector(".active").classList.remove("active");
    item.classList.add("active");

    //change the current slide in wrapper
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chosen product
    chosenProduct = products[index];
    chosenTitle = data.georgian.title[index];

    //change texts of currentProduct
    currentProductTitle.textContent = chosenTitle;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "wheat";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "wheat";
  });
});

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  payment.style.display = "none";
});
