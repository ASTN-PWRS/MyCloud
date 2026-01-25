function moveItemHandler({ type, name, destination, element, targetFolder }) {
  console.log("📦 moveItemHandler called:", {
    type,
    name,
    destination,
    element,
    targetFolder,
  });

  // オーバーレイなどのUI更新が必要ならここで行う
  // 例: element.classList.add("moving");

  // サーバーに移動リクエストを送信
  fetch("/move-item", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, name, destination }),
  })
    .then((res) => {
      if (res.ok) {
        // 成功時の処理（例：ページリロードやUI更新）
        location.reload();
      } else {
        console.warn("⚠️ 移動に失敗しました");
        // 必要ならオーバーレイ表示など
      }
    })
    .catch((err) => {
      console.error("❌ 通信エラー:", err);
      // 必要ならオーバーレイ表示など
    });
}
