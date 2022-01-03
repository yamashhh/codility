const app = () => {
  const table = document.getElementsByTagName("table")?.[0]?.tBodies?.[0];

  if (!table) {
    console.error("Table not found.");
    return;
  }

  TABLE_DATA.forEach((element) => {
    const row = table.insertRow();
    [...Array(4)].forEach(() => {
      row.insertCell();
    });
    Object.entries(element).forEach(([key, value]) => {
      switch (key) {
        case "id":
          row.cells[0].innerText = value;
          break;
        case "name":
          row.cells[2].innerText = value;
          break;
        case "thumbnailUrl":
          const image = document.createElement("img");
          image.src = encodeURIComponent(value);
          row.cells[1].appendChild(image);
          break;
        case "price":
          row.cells[3].innerText = value;
          break;
      }
    });
  });

  const tableRows = [...table.rows];

  document.getElementById("start").onclick = () => {
    alert("WIP...");
  };
  document.getElementById("stop").onclick = () => {
    alert("WIP...");
  };
  document.getElementById("sort").onclick = () => {
    tableRows
      .sort((a, b) => {
        const difference =
          Number(b.cells[3].innerText) - Number(a.cells[3].innerText);
        return difference
          ? difference
          : Number(a.cells[0].innerText) - Number(b.cells[0].innerText);
      })
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
      .forEach((element) => table.appendChild(element));
  };
};

app();
