const findSales = (sale) => {
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
      );
      newPrice =
        newPrice.children[3].firstChild.innerText == "od"
          ? newPrice.children[4]
          : newPrice.children[3];

      newPrice = newPrice.firstChild.innerText.slice(0, -8);

      let href =
        "https://www.zalando-lounge.pl" +
        article.querySelector("a").getAttribute("href");

      console.log(
        `STARA CENA ${oldPrice} \nNOWA CENA ${newPrice} \nhref ${href}`
      );
    }
  }, 3000);
};

const addWindow = () => {
  const window = document.createElement("div");
  window.classList.add("window-botlando");
  window.innerHTML =
    '<h2>Search best sales!</h2><button id="70">Sales > 70%</button><button id="60">Sales > 60%</button><button id="50">Sales > 50%</button><h3>BotLandoLounge | <a href="https://github.com/ih8u0/BotLandoLounge" target="_blank">GitHub</a></h3>';
  document.body.appendChild(window);
  return window;
};

addWindow();
findSales();
