const size = ["M", "36"];

const addArticle = (mySize) => {
  const sizeList = document.querySelectorAll(
    ".styles__ArticleSizeItemWrapper-sc-dt4c4z-4"
  );
  const button = document.querySelector(".auto-tests-add-to-cart-button");

  if (sizeList.length >= 1) {
    for (let size of sizeList) {
      let articleSize = size.querySelector("button").firstChild.innerText;
      if (articleSize == mySize[0] || articleSize == mySize[1]) {
        size.firstChild.click();
        button.click();
      }
    }
  } else {
    button.click();
  }
};

addArticle(size);
console.log("kajsdhfgkjhg");
