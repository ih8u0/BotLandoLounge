const findSales = () => {
  // const articles = document.querySelector("ul#articleListWrapper");
  const articles = document.querySelector("#articleListWrapper");
  articlesArray = articles.getElementsByTagName("li");
  console.log(articlesArray);
};

const addWindow = () => {
  const window = document.createElement("div");
  window.classList.add("window-botlando");
  window.innerHTML =
    "<h2>Search best sales!</h2><button>start searching</button>";
  document.body.appendChild(window);
  return window;
};

addWindow();
findSales();
