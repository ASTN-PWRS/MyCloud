/**
 * DragandDropManager クラス
 * ---------------------------------------------
 * 画面上のアイコン（ファイル・フォルダ）のドラッグ移動と、
 * 外部ファイルのフォルダへのドロップ処理を管理するユーティリティ。
 *
 * 【引数】
 * @param {string} containerSelector
 *   アイコンを含むコンテナ要素の CSS セレクタ
 *   例: ".icon-grid"
 *
 * @param {object} options
 *   設定オブジェクト
 *
 * @param {string} options.itemSelector
 *   アイコン要素（ファイル・フォルダ）の CSS セレクタ
 *   例: ".icon-item"
 *
 * @param {function} options.moveItem
 *   内部アイコン移動時に呼ばれるコールバック
 *   ドラッグ元 → ドロップ先フォルダへの移動処理を実装する
 *
 *   引数オブジェクト:
 *     {
 *       type: "file" | "folder",   // 移動するアイテムの種類
 *       name: string,              // ファイル名 or フォルダ名
 *       destination: string,       // ドロップ先フォルダのパス
 *       element: HTMLElement,      // 移動対象の DOM 要素
 *       targetFolder: HTMLElement  // ドロップ先フォルダの DOM 要素
 *     }
 *
 * @param {function} options.dropItem
 *   外部ファイルをフォルダにドロップしたときに呼ばれるコールバック
 *
 *   引数オブジェクト:
 *     {
 *       files: FileList,           // ドロップされた外部ファイル
 *       targetFolder: HTMLElement, // ドロップ先フォルダの DOM 要素
 *       destination: string        // ドロップ先フォルダのパス
 *     }
 *
 * ---------------------------------------------
 * 【呼び出し例】
 *
 * const mover = new ItemMove(".icon-grid", {
 *   itemSelector: ".icon-item",
 *
 *   // 内部アイコン移動（フォルダ間移動）
 *   moveItem: ({ type, name, destination, element, targetFolder }) => {
 *     console.log("内部移動:", { type, name, destination });
 *     // ここに API 呼び出しや UI 更新処理を書く
 *   },
 *
 *   // 外部ファイルドロップ（アップロード処理）
 *   dropItem: ({ files, destination, targetFolder }) => {
 *     console.log("外部ファイルドロップ:", files, destination);
 *     // ここにアップロード処理を書く
 *   }
 * });
 *
 * const mover = new ItemMove(".icon-grid", {
 *  itemSelector: ".icon-item",
 *
 * // 内部アイコン移動
 * moveItem: ({ type, name, destination }) => {
 *   console.log("moveItem:", type, name, destination);
 * },
 *
 * // 外部ファイルドロップ（何もしない）
 * dropItem: ({ files, destination, targetFolder }) => {
 *   // 何もしない
 *   console.log("dropItem: 外部ファイルドロップを受け取ったが処理しません");
 * }
 *});
 *
 * ---------------------------------------------
 * 【主な機能】
 * - アイコン（ファイル・フォルダ）のドラッグ移動
 * - フォルダへのドロップで移動処理を発火
 * - 外部ファイルのドロップ検知（dropItem）
 * - 外部ファイルドラッグ中はアイコンドラッグを無効化
 */
export class DragandDropManager {
  constructor(containerSelector = ".icon-grid", options = {}) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.warn("📦 指定されたコンテナが見つかりません:", containerSelector);
      return;
    }

    this.itemSelector = options.itemSelector || ".icon-item";
    this.externalMoveItem = options.moveItem || null; // 内部移動
    this.externalDropItem = options.dropItem || null; // 外部ファイルドロップ

    this.isExternalDrag = false; // ★ 外部ファイルドラッグ中フラグ

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
    this.bindExternalDragDetection(); // ★ 外部ファイルドラッグ検知
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

  // ★ 外部ファイルドラッグ検知
  bindExternalDragDetection() {
    document.addEventListener("dragenter", (e) => {
      if (e.dataTransfer?.types.includes("Files")) {
        this.isExternalDrag = true;
      }
    });

    document.addEventListener("dragleave", (e) => {
      if (e.relatedTarget === null) {
        this.isExternalDrag = false;
      }
    });

    document.addEventListener("drop", () => {
      this.isExternalDrag = false;
    });
  }

  bindDraggables() {
    const draggables = this.container.querySelectorAll(
      ".file-draggable, .folder-draggable",
    );

    draggables.forEach((el) => {
      el.addEventListener("dragstart", (event) => {
        // ★ 外部ファイルドラッグ中ならアイコンドラッグを無効化
        if (this.isExternalDrag) {
          event.preventDefault();
          return;
        }

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

        const targetPath = folderEl.dataset.folderPath;

        // ★ 外部ファイルドロップ
        if (event.dataTransfer?.files?.length > 0) {
          if (this.externalDropItem) {
            this.externalDropItem({
              files: event.dataTransfer.files,
              targetFolder: folderEl,
              destination: targetPath,
            });
          }
          return;
        }

        // ★ 内部アイコン移動
        this.showOverlay("移動中…");

        try {
          const raw = event.dataTransfer.getData("text/plain");
          if (!raw) throw new Error("ドロップデータが空です");

          const data = JSON.parse(raw);
          const { type: draggedType, name: draggedName } = data;

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

          if (this.externalMoveItem) {
            this.externalMoveItem({
              type: draggedType,
              name: draggedName,
              destination: targetPath,
              element: draggedEl,
              targetFolder: folderEl,
            });
          }
        } catch (err) {
          console.warn("⚠️ ドロップ処理中にエラー:", err);
          this.showOverlay("⚠️ エラーが発生しました");
        }
      });
    });
  }
}
