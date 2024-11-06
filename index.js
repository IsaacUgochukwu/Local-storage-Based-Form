function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fullName = formData.get('fullname');
  const email = formData.get('email');
  const password = formData.get('password');
  const dob = formData.get('dob');
  const fullNameBar = document.getElementById('fullname-bar').innerHTML = 'Fullname: ' + fullName;
  const emailBar = document.getElementById('email-bar').innerHTML = 'Email: ' + email;
  const passwordBar = document.getElementById('password-bar').innerHTML = 'Password: ' + password;
  const dobBar = document.getElementById('dob-bar').innerHTML = 'DOB: ' + dob;
  localStorage.setItem('fullname', fullName);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('dob', dob);

  if (password.length >= 6) {
    const dialog = document.getElementById('dialog').style.display = 'block';
    document.getElementById('form').classList.add('blur');
  }
  else {
    // Do nothing
  }
}

function login(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  if (password.length >= 6) {
    const dialog = document.getElementById('dialog').style.display = 'block';
    document.getElementById('form').classList.add('blur');
  } else {
    // Do nothing
  }
  if (email === localStorage.getItem('email')) {
    document.getElementById('info').innerHTML = 'Email verified!';
    document.getElementById('info').classList.remove('red');
    document.getElementById('info').classList.add('green');
  } else {
    document.getElementById('info').innerHTML = 'Email not found!';
    document.getElementById('info').classList.remove('green');
    document.getElementById('info').classList.add('red');
    document.getElementById('dialog').style.display = 'none';
    document.getElementById('form').classList.remove('blur');
  }

  if (password === localStorage.getItem('password')) {
    document.getElementById('info-two').innerHTML = 'Password verified!';
    document.getElementById('info-two').classList.add('green');
  } else {
    document.getElementById('info-two').innerHTML = 'Password not found!';
    document.getElementById('info-two').classList.add('red');
    document.getElementById('dialog').style.display = 'none';
    document.getElementById('form').classList.remove('blur');
  }
}

function checkPassword(event) {
  const password = event.target.value;
  if (password.length >= 6) {
    document.getElementById('message').innerHTML = 'Good password!';
    document.getElementById('message').classList.add('green');
    document.getElementById('message').classList.remove('red');
  } else {
    document.getElementById('message').innerHTML = 'Password needs to be at least 6 characters long!';
    document.getElementById('message').classList.add('red');
    document.getElementById('message').classList.remove('green');
  }
}

function checkEmail(event) {
  if (event.target.value === localStorage.getItem('email')) {
    document.getElementById('info').innerHTML = 'Email verified!';
    document.getElementById('info').classList.add('green');
  } else {
    document.getElementById('info').innerHTML = 'Email not found!';
    document.getElementById('info').classList.add('red');
  }
}

function checkPasswordFound(event) {
  if (event.target.value === localStorage.getItem('password')) {
    document.getElementById('info-two').innerHTML = 'Password verified!';
    document.getElementById('info-two').classList.remove('red');
    document.getElementById('info-two').classList.add('green');
  } else {
    document.getElementById('info-two').innerHTML = 'Password not found!';
    document.getElementById('info-two').classList.remove('green');
    document.getElementById('info-two').classList.add('red');
    document.getElementById('dialog').style.display = 'none';
    document.getElementById('form').classList.remove('blur');
  }
}

function handleClick() {
  document.getElementById('dialog').style.display = 'none';
  document.getElementById('form').classList.remove('blur');
  location.href = 'main.html';
}