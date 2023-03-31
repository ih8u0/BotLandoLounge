const findSales = () => {
  setTimeout(() => {
    const articles = document.querySelectorAll(
      ".Articlestyles__ArticleWrapper-sc-hib3gs-0"
    );
    for (let article of articles) {
      let oldPrice = article
        .querySelector(".Pricestyles__PriceWrapper-sc-ma110l-0")
        .children[1].firstChild.innerHTML.slice(0, -11);
      let newPrice = article.querySelector(
        ".Pricestyles__PriceWrapper-sc-ma110l-0"
      ).children[3].firstChild.innerText;
      console.log(`STARA CENA ${oldPrice} NOWA CENA ${newPrice}`);
    }
  }, 3000);
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
