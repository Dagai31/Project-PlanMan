window.addEventListener('load', () => {
  document.getElementById('name').value = localStorage.getItem('login_email')
})
