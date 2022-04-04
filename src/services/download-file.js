import { api } from "./api";

const token = localStorage.getItem("token");

async function fetchFile(type, id, fileName) {
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
      let link = document.createElement("a");
      link.href = data;
      link.download = fileName;
      link.click();
    });
}

export { fetchFile };
