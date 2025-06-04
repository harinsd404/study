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

    let today = new Date(); 
    
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDay().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0'); 
    
    const date = `${year}-${month}-${day} ${hours}:${minutes}`;
    console.log(date);

    if (who && letter) {
        localStorage.setItem('letterData', JSON.stringify({
            who,
            letter,
            date
        }));
        window.location = './letter-page.html';
        }
});