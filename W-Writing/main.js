const startBtn = document.querySelector('.startBtn');
const who = document.querySelector('.who').value;
const letter = document.querySelector('.letter').value;
const main = document.getElementById('main');


startBtn.addEventListener('click', () => {
    document.querySelector('.bg').classList.add('close');
    document.getElementById('main').style.display = 'block';
});

document.querySelector('.endBtn').addEventListener('click', () => {
    console.log(who);
    console.log(letter);
    if(who != ' '){ /* 조건 실행이 제대로 되지 않음 -> 페이지가 두 개인데 main도 두개임 따라서 어떤 파일에 main에 추가해야할지 에러 발생 */
        if(letter != ' '){
            window.location = './letter-page.html';
            main.innerHTML = `
            <div class="window">
                <div class="window_h"></div>
                <div class="textArea">
                    <p class="to">To. ${who}</p>
                    <p class="detail">
                        ${letter}
                    </p>
                    <p class="date">${today.toLocaleString()}</p>
                </div>
            </div>
            `;
        }
    }
});