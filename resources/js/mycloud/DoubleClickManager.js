// new DoubleClickManager('.parent', '.child', (child, parent, event) => {
//   // エラー時
//   if (child && child.error) {
//     console.error("エラー:", child);
//     return;
//   }

//   console.log("子:", child);
//   console.log("親:", parent);
// });

class DoubleClickManager {
  constructor(parentSelector, childSelector, onChildDoubleClick) {
    this.parentSelector = parentSelector;
    this.childSelector = childSelector;
    this.onChildDoubleClick = onChildDoubleClick;

    // 親要素を取得
    const parents = [...document.querySelectorAll(parentSelector)];

    // 親が1つでない場合はエラーをハンドラーに通知
    if (parents.length !== 1) {
      const error = {
        error: true,
        message: `ParentElement: 親要素が ${parents.length} 個見つかりました。1 個である必要があります。`,
        found: parents.length,
        selector: parentSelector,
      };

      if (this.onChildDoubleClick) {
        this.onChildDoubleClick(error, null, null);
      }
      return;
    }

    // 親は1つだけ
    this.parent = parents[0];

    // イベント委譲で子の dblclick を拾う
    this.parent.addEventListener("dblclick", (event) => {
      const child = event.target.closest(this.childSelector);

      // 親の外側や関係ない要素は無視
      if (!child || !this.parent.contains(child)) return;

      // ハンドラーに (子, 親, event) を渡す
      if (this.onChildDoubleClick) {
        this.onChildDoubleClick(child, this.parent, event);
      }
    });
  }
}
