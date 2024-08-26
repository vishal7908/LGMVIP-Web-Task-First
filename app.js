let addFrm = document.addfrm; // in form tag we can directly access the reference of the tag with their name
let text = addFrm.add;
let ul = document.querySelector(".todos");
let addItem = (item) => {
  let str = `<li>
          <span> ${item}</span>
          <i class="fa-solid fa-xmark"></i>
        </li>`;

  ul.innerHTML += str;
};

addFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value;
  if (item.length > 0) {
    addItem(item);
    text.value = "";
  }
});

// concept event deligation
ul.addEventListener(
  "click",
  (e) => {
    console.log(e.target.nodeName);
    // check weather the clicked item is I tag ?
    if (e.target.nodeName === "I") {
      // if yes Remove parent of i tag i.e entire <li>
      e.target.parentElement.remove();
    } else if (e.target.nodeName === "SPAN") {
      console.log(e.target.classList.toggle("checked"));
      // e.target.classList.add("checked");
    }
  },
  false
);
