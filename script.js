const findSales = () => {
  const sales = document.querySelectorAll("ul#articleListWrapper li");
  for (sale of sales) {
    console.log(sale.innerHTML);
  }
};

findSales();
