// vcosnole.js
if ($response.body) {
  let body = $response.body;
  const scriptTag = `<script src="https://h5static.kuwo.cn/festatic/vconsole@3.14.6/vconsole.min.js"></script><script>var vConsole = new window.VConsole();</script>`;

  // 在 </body> 标签前插入 vConsole 脚本
  body = body.replace(/<\/body>/, `${scriptTag}</body>`);
  $done({ body });
} else {
  $done({});
}
