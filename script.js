JavaScript
async function upload() {
  const files = document.getElementById("files").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData
  });

  const text = await res.text();
  document.getElementById("status").innerText = text;
}