import { api } from "./api";

async function fetchFile(type, id, fileName, token) {
  await api
    .get(`download/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    })
    .then((response) => {
      const contentType = response.headers["content-type"];
      const newBlob = new Blob([response.data], { type: contentType });
      const data = window.URL.createObjectURL(newBlob);
      if (type === "documento") {
        let link = document.createElement("a");
        link.href = data;
        link.download = fileName;
        link.click();
      } else {
        let image = document.createElement("img");
        image.src = data;
        image.alt = fileName;
        image.style.width = '300px';
        image.style.height = '270px';
        let div = document.getElementById("img-section");
        div.appendChild(image);
      }
    });
}

export { fetchFile };
