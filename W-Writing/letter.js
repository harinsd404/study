const data = JSON.parse(localStorage.getItem(`letterData`));
let count = 0;

function renderPage(data){
    const main = document.getElementById('wMain');
    count = 0;
    main.innerHTML=``;
    data.forEach(item=>{
        count++;
        main.insertAdjacentHTML('beforeend', `
        <div class="window ${count}">
            <div class="window_h"></div>
            <div class="textArea">
                <p class="to">To. ${item.whoData}</p>
                <p class="detail">${item.letterData}</p>
                <p class="date">${item.dateData}</p>
            </div>
        </div>
    `); 
    })
    
}
renderPage(data);
function sortDate(){
    count++;
    if(count%2==0)
        data.sort((a, b)=> a.dateData.localeCompare(b.dateData));
    else
        data.sort((a, b)=> b.dateData.localeCompare(a.dateData));
    renderPage(data);
};

document.querySelector('.window').addEventListener('click', ()=>{

});