const startBtn = document.querySelector('.startBtn');
const mainWrite = document.getElementById('main');
let letterData = JSON.parse(localStorage.getItem('letterData')) || [];


startBtn.addEventListener('click', () => {
    document.querySelector('.bg').classList.add('close');
    mainWrite.style.display = 'block';
});

document.querySelector('.endBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const who = document.querySelector('.who');
    const letter = document.querySelector('.letter');
    if (!who) {
        who.focus();
        alert('받는 사람의 이름을 입력하지 않았습니다.');
        return;
    } else if(!letter){
        letter.focus();
        alert('편지의 내용이 비어있습니다.');
        return;
    }

    let today = new Date(); 
    
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');
    let minutes = today.getMinutes().toString().padStart(2, '0'); 
    
    const date = `${year}-${month}-${day} ${hours}:${minutes}`;
    console.log(date);
    letterData.push({whoData: who.value.trim(), letterData: letter.value.trim(), dateData: date});
    who.value = ``;
    letter.value = ``;
    
    localStorage.setItem('letterData', JSON.stringify(letterData));
    window.location = './letter-page.html';
});


