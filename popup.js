const button = document.getElementById("confirm");

//清除用
let id;

// 开始事件
function todo() {
  if (!id) {
    id = setInterval(getTime, 1000);
  }
}

// 获取时间
function getTime() {
  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const h = date.getHours();
  const min = date.getMinutes();
  const second = date.getSeconds();
  const content = document.getElementById('timer');
  content.innerHTML = `${year}年${month}月${day}日${h}:${min}:${second}`;
}

// 停止事件
function stopdo() {
  clearInterval(id);
  id = null;
  const content = document.getElementById('timer');
  content.innerHTML = '';
}

button.addEventListener("click", todo);

const buttonCancel = document.getElementById("cancel");

buttonCancel.addEventListener("click", stopdo);