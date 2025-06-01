const startBtn = document.querySelector('.startBtn');

startBtn.addEventListener('click', () => {
    document.querySelector('.bg').classList.add('close');
    document.getElementById('main').style.display = 'block';
});