// new ItemMove(".icon-grid", {
//   itemSelector: ".icon-item",
//   moveItem: ({ type, name, destination, element, targetFolder }) => {
//     console.log("外部moveItem:", { type, name, destination, element, targetFolder });
//     // カスタム処理を書く
//     // 例: アニメーション、API呼び出し、ログ記録など
//   }
// });
// const mover = new ItemMove(".icon-grid", {
//   itemSelector: ".icon-item",
//   moveItem: moveItemHandler,
// });

class ItemMove {
  constructor(containerSelector = ".icon-grid", options = {}) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.warn("📦 指定されたコンテナが見つかりません:", containerSelector);
      return;
    }

    this.itemSelector = options.itemSelector || ".icon-item";
    this.externalMoveItem = options.moveItem || null;

    this.dialog = document.getElementById("overlay-dialog");
    if (!this.dialog) {
      this.dialog = document.createElement("sl-dialog");
      this.dialog.id = "overlay-dialog";
      this.dialog.setAttribute("label", "処理中");
      this.dialog.setAttribute("no-header", "");
      this.dialog.setAttribute("no-footer", "");
      this.dialog.setAttribute("style", "--width: auto;");
      this.dialog.classList.add("overlay-dialog");

      const contentWrapper = document.createElement("div");
      contentWrapper.style.display = "flex";
      contentWrapper.style.flexDirection = "column";
      contentWrapper.style.alignItems = "center";
      contentWrapper.style.gap = "1em";

      const spinner = document.createElement("sl-spinner");
      spinner.style.fontSize = "2rem";

      const message = document.createElement("div");
      message.id = "overlay-message";
      message.textContent = "処理中です…";

      const closeButton = document.createElement("sl-button");
      closeButton.variant = "primary";
      closeButton.innerText = "閉じる";
      closeButton.addEventListener("click", () => this.hideOverlay());

      contentWrapper.appendChild(spinner);
      contentWrapper.appendChild(message);
      contentWrapper.appendChild(closeButton);
      this.dialog.appendChild(contentWrapper);

      document.body.appendChild(this.dialog);
    }

    this.dialogMessage = this.dialog.querySelector("#overlay-message");

    this.prepareDraggableClasses();
    this.bindDraggables();
    this.bindDropTargets();
  }

  showOverlay(message = "処理中です…") {
    if (this.dialog && this.dialogMessage) {
      this.dialogMessage.textContent = message;
      this.dialog.show();
    }
  }

  hideOverlay() {
    if (this.dialog) {
      this.dialog.hide();
    }
  }

  prepareDraggableClasses() {
    const items = this.container.querySelectorAll(this.itemSelector);

    items.forEach((el) => {
      const type = el.dataset.type;
      if (type === "folder") {
        el.classList.add("folder-draggable", "folder-drop-target");
        el.setAttribute("draggable", "true");
      } else if (type === "file") {
        el.classList.add("file-draggable");
        el.setAttribute("draggable", "true");
      }
    });
  }

  bindDraggables() {
    const draggables = this.container.querySelectorAll(
      ".file-draggable, .folder-draggable",
    );

    draggables.forEach((el) => {
      el.addEventListener("dragstart", (event) => {
        const type = el.dataset.type;
        const name =
          type === "file" ? el.dataset.fileName : el.dataset.folderName;

        if (!type || !name) {
          console.warn("ドラッグ対象に必要なデータ属性がありません", el);
          return;
        }

        const payload = JSON.stringify({ type, name });
        event.dataTransfer.setData("text/plain", payload);
        event.dataTransfer.effectAllowed = "move";
      });
    });
  }

  bindDropTargets() {
    const targets = this.container.querySelectorAll(".folder-drop-target");

    targets.forEach((folderEl) => {
      folderEl.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      });

      folderEl.addEventListener("dragenter", () => {
        folderEl.classList.add("drag-over");
      });

      folderEl.addEventListener("dragleave", () => {
        folderEl.classList.remove("drag-over");
      });

      folderEl.addEventListener("drop", (event) => {
        event.preventDefault();
        folderEl.classList.remove("drag-over");

        this.showOverlay("移動中…");

        try {
          const raw = event.dataTransfer.getData("text/plain");
          if (!raw) throw new Error("ドロップデータが空です");

          const data = JSON.parse(raw);
          const { type: draggedType, name: draggedName } = data;
          const targetPath = folderEl.dataset.folderPath;
          const targetName = folderEl.dataset.folderName;

          if (!draggedType || !draggedName || !targetPath) {
            throw new Error("ドロップ先またはドラッグ元の情報が不足しています");
          }

          const draggedEl = [
            ...this.container.querySelectorAll(this.itemSelector),
          ].find((el) => {
            const matchName =
              draggedType === "file"
                ? el.dataset.fileName === draggedName
                : el.dataset.folderName === draggedName;
            return el.dataset.type === draggedType && matchName;
          });

          if (
            this.externalMoveItem &&
            typeof this.externalMoveItem === "function"
          ) {
            this.externalMoveItem({
              type: draggedType,
              name: draggedName,
              destination: targetPath,
              element: draggedEl,
              targetFolder: folderEl,
            });
          } else {
            console.warn("⚠️ moveItem 関数が指定されていません");
            this.showOverlay("⚠️ 移動処理が未定義です");
          }
        } catch (err) {
          console.warn("⚠️ ドロップ処理中にエラー:", err);
          this.showOverlay("⚠️ エラーが発生しました");
        }
      });
    });
  }
}
