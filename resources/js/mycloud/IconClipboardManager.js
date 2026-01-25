// const clipboard = new IconClipboardManager({
//   selector: '.icon-item',
//   containerSelector: '.icon-grid',
//   storageKey: 'cutItems'
// });

class IconClipboardManager {
  constructor({
    selector = ".icon-item",
    containerSelector = ".icon-grid",
    storageKey = "cutItems",
  }) {
    this.selector = selector;
    this.containerSelector = containerSelector;
    this.storageKey = storageKey;
    this.selectedItems = new Set();

    this.init();
  }

  init() {
    document.addEventListener("click", this.handleClick.bind(this));
    document.addEventListener("keydown", this.handleKeydown.bind(this));
  }

  handleClick(event) {
    const item = event.target.closest(this.selector);
    if (!item) return;

    if (event.ctrlKey) {
      this.toggleSelection(item);
    } else {
      this.clearSelection();
      this.selectItem(item);
    }
  }

  toggleSelection(item) {
    if (this.selectedItems.has(item)) {
      item.classList.remove("selected");
      this.selectedItems.delete(item);
    } else {
      item.classList.add("selected");
      this.selectedItems.add(item);
    }
  }

  selectItem(item) {
    item.classList.add("selected");
    this.selectedItems.add(item);
  }

  clearSelection() {
    this.selectedItems.forEach((item) => item.classList.remove("selected"));
    this.selectedItems.clear();
  }

  handleKeydown(event) {
    if (event.ctrlKey && event.key.toLowerCase() === "x") {
      this.cutSelectedItems();
    }

    if (event.ctrlKey && event.key.toLowerCase() === "v") {
      this.pasteItems();
    }
  }

  cutSelectedItems() {
    const data = Array.from(this.selectedItems).map((item) => ({
      type: item.dataset.type,
      name: item.dataset.fileName || item.dataset.folderName,
      path: item.dataset.folderPath || null,
      id: item.dataset.fileId || null,
    }));

    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
    console.log("切り取り:", data);
    this.clearSelection();
  }

  pasteItems() {
    const rawData = JSON.parse(sessionStorage.getItem(this.storageKey) || "[]");
    const targetFolder = document.querySelector(this.containerSelector)?.dataset
      .folderPath;
    if (!targetFolder || rawData.length === 0) return;

    const validItems = [];

    for (const item of rawData) {
      const sourcePath = item.path;
      if (!sourcePath) continue;

      if (targetFolder === sourcePath) {
        // 同じ場所 → 選択解除のみ
        const selector = `${this.selector}[data-${item.type}-name="${item.name}"]`;
        const el = document.querySelector(selector);
        if (el) el.classList.remove("selected");
        continue;
      }

      if (targetFolder.startsWith(sourcePath + "/")) {
        alert(
          `「${item.name}」は自身の下位フォルダに移動できません。操作を中止しました。`,
        );
        return;
      }

      validItems.push(item);
    }

    if (validItems.length === 0) {
      sessionStorage.removeItem(this.storageKey);
      return;
    }

    // 実際の移動処理（ここにAPI呼び出しなどを追加）
    console.log("移動先:", targetFolder);
    console.log("移動するアイテム:", validItems);

    alert(`${validItems.length} 件のアイテムを「${targetFolder}」に移動します`);
    sessionStorage.removeItem(this.storageKey);
  }
}
