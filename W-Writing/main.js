const startBtn = document.querySelector('.startBtn');
const mainWrite = document.getElementById('main');


startBtn.addEventListener('click', () => {
    document.querySelector('.bg').classList.add('close');
    mainWrite.style.display = 'block';
});

document.querySelector('.endBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const who = document.querySelector('.who').value.trim();
    const letter = document.querySelector('.letter').value.trim();

    if (who && letter) {
        localStorage.setItem('letterData', JSON.stringify({
            who,
            letter,
            date: new Date().toLocaleString()
        }));
        window.location = './letter-page.html';
        }
});