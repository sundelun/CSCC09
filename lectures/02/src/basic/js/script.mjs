document.querySelector(
  "#content",
).innerHTML = `<h1 id="title">This is a heading.</h1>`;

document.getElementById("title").onclick = function () {
  const elmnt = document.createElement("p");
  elmnt.innerHTML = "This is a paragraph";
  document.querySelector("#content").appendChild(elmnt);
};
