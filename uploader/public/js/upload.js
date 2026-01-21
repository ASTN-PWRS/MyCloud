const dropzone = document.getElementById("dropzone");
const dialog = document.getElementById("uploadDialog");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progressText");

// フォルダ内のファイルを再帰的に取得
async function readEntriesRecursively(entry, fileList = []) {
  if (entry.isFile) {
    fileList.push(await new Promise((resolve) => entry.file(resolve)));
  } else if (entry.isDirectory) {
    const reader = entry.createReader();
    const entries = await new Promise((resolve) => reader.readEntries(resolve));
    for (const e of entries) {
      await readEntriesRecursively(e, fileList);
    }
  }
  return fileList;
}

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("has-background-light");
});

dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("has-background-light");
});

dropzone.addEventListener("drop", async (e) => {
  e.preventDefault();
  dropzone.classList.remove("has-background-light");

  const items = e.dataTransfer.items;
  let files = [];

  for (const item of items) {
    const entry = item.webkitGetAsEntry();
    if (entry) {
      files = files.concat(await readEntriesRecursively(entry));
    }
  }

  if (files.length === 0) return;

  dialog.show();

  await uploadFiles(files);
});

async function uploadFiles(files) {
  const total = files.length;
  let uploaded = 0;

  const uploadRoot = "/test"; // ← クライアントが指定するアップロード先

  dialog.show();

  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file, file.name);

    // ドロップされたフォルダ構造（aa/bb/cc/dd.pdf）
    formData.append("relativePath", file.webkitRelativePath || file.name);

    // ★ 追加：サーバに /test を渡す
    formData.append("uploadRoot", uploadRoot);

    try {
      const res = await fetch("/upload", { method: "POST", body: formData });

      if (res.status === 409) {
        const json = await res.json();
        console.error("重複:", json);
        progressText.textContent = "同じファイルが存在します";
        dialog.hide();
        return;
      }
      if (!res.ok) {
        throw new Error(`Upload failed: ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      progressText.textContent = "エラーが発生しました";
      dialog.hide();
      return;
    }

    uploaded++;
    const percent = Math.round((uploaded / total) * 100);
    progressBar.value = percent;
    progressText.textContent = percent + "%";
  }

  dialog.hide();
}
