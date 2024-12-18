const itemsArray = [
  { id: "a1b2c3d4e", name: "Item a1b2c3d4e", value: 42 },
  { id: "f5g6h7i8j", name: "Item f5g6h7i8j", value: 87 },
  { id: "k9l0m1n2o", name: "Item k9l0m1n2o", value: 15 },
  { id: "p3q4r5s6t", name: "Item p3q4r5s6t", value: 63 },
  { id: "u7v8w9x0y", name: "Item u7v8w9x0y", value: 91 },
  { id: "z1a2b3c4d", name: "Item z1a2b3c4d", value: 28 },
  { id: "e5f6g7h8i", name: "Item e5f6g7h8i", value: 74 },
  { id: "j9k0l1m2n", name: "Item j9k0l1m2n", value: 39 },
  { id: "o3p4q5r6s", name: "Item o3p4q5r6s", value: 56 },
  { id: "t7u8v9w0x", name: "Item t7u8v9w0x", value: 82 },
  { id: "y1z2a3b4c", name: "Item y1z2a3b4c", value: 19 },
  { id: "d5e6f7g8h", name: "Item d5e6f7g8h", value: 67 },
  { id: "i9j0k1l2m", name: "Item i9j0k1l2m", value: 34 },
  { id: "n3o4p5q6r", name: "Item n3o4p5q6r", value: 51 },
  { id: "s7t8u9v0w", name: "Item s7t8u9v0w", value: 79 },
  { id: "x1y2z3a4b", name: "Item x1y2z3a4b", value: 26 },
  { id: "c5d6e7f8g", name: "Item c5d6e7f8g", value: 72 },
  { id: "h9i0j1k2l", name: "Item h9i0j1k2l", value: 48 },
  { id: "m3n4o5p6q", name: "Item m3n4o5p6q", value: 95 },
  { id: "r7s8t9u0v", name: "Item r7s8t9u0v", value: 31 },
  { id: "w1x2y3z4a", name: "Item w1x2y3z4a", value: 59 },
  { id: "b5c6d7e8f", name: "Item b5c6d7e8f", value: 85 },
  { id: "g9h0i1j2k", name: "Item g9h0i1j2k", value: 12 },
  { id: "l3m4n5o6p", name: "Item l3m4n5o6p", value: 68 },
];

const scrollList = document.getElementById("rightList");
const list = document.getElementById("leftList");
const centerItem = document.getElementById("centerItem");

function renderList(itemsArray, list) {
  list.innerHTML = "";

  itemsArray.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}`;
    li.id = item.id;
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {
      scroll(item);
    });

    list.appendChild(li);
  });
}

function scroll(item) {
  const li = document.createElement("li");
  li.textContent = item.name;
  li.classList.add("selected");
  scrollList.prepend(li);
  scrollList.scrollTo({
    top: li.offsetTop - scrollList.clientHeight / 2 + li.clientHeight / 2,
    behavior: "smooth",
  });
}

const searchInput = document.getElementById("search");

function filterItems() {
  const search = searchInput.value.toLowerCase();
  const filterList = itemsArray.filter((item) =>
    item.name.toLocaleLowerCase().includes(search)
  );
  renderList(filterList, list);
}

searchInput.addEventListener("input", filterItems);
renderList(itemsArray, list);
renderList(itemsArray, scrollList);
