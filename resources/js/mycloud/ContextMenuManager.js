// const manager = new ContextMenuManager({
//   menuId: 'context-menu',
//   selector: '.icon-item',
//   actions: {
//     folder: [
//       {
//         value: 'open',
//         label: '開く',
//         name: 'folder', // ← Shoelaceのアイコン名
//         handler: el => openFolder({ target: el })
//       },
//       {
//         value: 'rename',
//         label: '名前を変更',
//         name: 'pencil',
//         handler: el => alert(`フォルダ「${el.dataset.folderName}」をリネームします`)
//       }
//     ],
//     file: [
//       {
//         value: 'view',
//         label: '表示',
//         name: 'file-earmark',
//         handler: el => location.href = `/view/${el.dataset.fileId}`
//       },
//       {
//         value: 'delete',
//         label: '削除',
//         name: 'trash',
//         handler: el => alert(`ファイル「${el.dataset.fileName}」を削除します`)
//       },
//       {
//         value: 'info',
//         label: '詳細',
//         // name を省略するとアイコンなし
//         handler: el => alert(`ファイル「${el.dataset.fileName}」の詳細を表示します`)
//       }
//     ]
//   }
// });

class ContextMenuManager {
  constructor({
    menuId = "context-menu",
    selector = ".context-target",
    actions = {},
  }) {
    this.selector = selector;
    this.actions = actions;
    this.currentTarget = null;

    this.menu = document.getElementById(menuId);
    if (!this.menu) {
      this.menu = document.createElement("sl-menu");
      this.menu.id = menuId;
      this.menu.style.position = "fixed";
      this.menu.style.display = "none";
      this.menu.style.zIndex = "1000";
      document.body.appendChild(this.menu);
    }

    document.addEventListener("contextmenu", this.handleContextMenu.bind(this));
    document.addEventListener("click", this.hideMenu.bind(this));
    this.menu.addEventListener("sl-select", this.handleSelect.bind(this));
  }

  handleContextMenu(event) {
    const target = event.target.closest(this.selector);
    if (!target) return;

    event.preventDefault();
    this.currentTarget = target;

    const type = target.dataset.type;
    const menuItems =
      this.actions[type]
        ?.map((action) => {
          const iconAttr = action.name ? ` name="${action.name}"` : "";
          return `<sl-menu-item value="${action.value}"${iconAttr}>${action.label}</sl-menu-item>`;
        })
        .join("") || "";

    if (!menuItems) return;

    this.menu.innerHTML = menuItems;
    this.menu.style.left = `${event.clientX}px`;
    this.menu.style.top = `${event.clientY}px`;
    this.menu.style.display = "block";
    this.menu.show();
  }

  hideMenu() {
    this.menu.style.display = "none";
    this.menu.hide();
  }

  handleSelect(event) {
    const actionValue = event.detail.item.value;
    const type = this.currentTarget?.dataset.type;
    const handler = this.actions[type]?.find(
      (a) => a.value === actionValue,
    )?.handler;

    if (handler) {
      handler(this.currentTarget);
    }

    this.hideMenu();
  }
}
