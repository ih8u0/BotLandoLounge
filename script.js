const findSales = () => {
  const sales = document.querySelectorAll("ul#articleListWrapper li");
  for (sale of sales) {
    console.log(sale.innerHTML);
  }
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
