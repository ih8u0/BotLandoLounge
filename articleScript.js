const addArticle = (mySize) => {
  const sizeList = document.querySelectorAll(
    ".styles__ArticleSizeItemWrapper-sc-dt4c4z-4"
  );
  const button = document.querySelector(".auto-tests-add-to-cart-button");

  if (sizeList.length >= 1) {
    for (let size of sizeList) {
      let articleSize = size.querySelector("button").firstChild.innerText;
      if (articleSize == mySize) {
        size.firstChild.click();
        button.click();
      }
    }
  } else {
    button.click();
  }
};

console.log(yourSize);
addArticle(35);
