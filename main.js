function getUserName() {
  const fullName = localStorage.getItem('fullname');
  const greeting = document.getElementById('greeting').innerHTML = 'Hello 👋' + fullName;
}

function feedBars() {
  const fullNameBar = document.getElementById('fullname-bar').innerHTML = 'I\'m ' + localStorage.getItem('fullname');
}

function uploadPic(event) {
  const imgFile = event.target.files[0];
  const imgUrl = URL.createObjectURL(imgFile);
  const img = document.getElementById('img').src = imgUrl;
}

function clickFileInput() {
  const fileInput = document.getElementById('file-input').click();
}

function logout() {
  location.href = 'login.html';
}