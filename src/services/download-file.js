import { api } from "./api";

const token = localStorage.getItem("token");

const a = document.createElement("a");
a.style.display = "none";

function getBase64(file, fileName) {
  var a = document.createElement("a");
  a.display = "none";
  a.href = "data:image/png;base64," + file;
  a.download = fileName;
  a.click();
}

async function fetchFile(id, fileName) {
  await api
    .get(`download/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((item) => {
      getBase64(item.data, fileName);
    });
}

export { fetchFile };
