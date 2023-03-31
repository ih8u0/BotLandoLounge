const findSales = (sale) => {
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

    if (100 - sale >= (newPrice / oldPrice) * 100) {
      window.open(href);
      // console.log(
      //   `100% - ${sale}% = ${
      //     100 - sale
      //   }%\nPLACISZ ${newPrice} / ${oldPrice} * 100 = ${
      //     (newPrice / oldPrice) * 100
      //   }% GLOWNEJ CENY\nOSZCZEDZASZ ${
      //     100 - (newPrice / oldPrice) * 100
      //   }%\n\n${href}`
      // );
    }
  }
};

const addWindow = () => {
  const windowBox = document.createElement("div");
  const scrollDown = document.createElement("h2");
  windowBox.classList.add("window-botlando");
  scrollDown.setAttribute("id", "scrolldown-botlando");
  windowBox.innerHTML =
    '<h2>Search best sales!</h2><button id="70">Sales > 70%</button><button id="65">Sales > 65%</button><button id="60">Sales > 60%</button><button id="55">Sales > 55%</button><h4>BotLandoLounge | <a href="https://github.com/ih8u0/BotLandoLounge" target="_blank">GitHub</a></h4>';
  scrollDown.innerHTML = "👇";
  document.body.appendChild(windowBox);
  document.body.appendChild(scrollDown);

  scrollDown.addEventListener("click", () => {
    window.scrollTo(0, document.body.scrollHeight);
  });
};

const openOffers = () => {
  const buttons = document.querySelectorAll(".window-botlando button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      findSales(e.target.id);
    });
  });
};

addWindow();
// findSales();
openOffers();
