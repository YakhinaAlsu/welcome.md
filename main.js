let time = document.querySelector('#time');
let welcome = document.querySelector('#welcome');
let name = document.querySelector('#name');
let text = document.querySelector('#text');

function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

    setTimeout(showTime, 1000);

    if(hour<12) {
        document.body.style.backgroundImage = "url(https://99px.ru/sstorage/53/2019/04/tmb_257353_408948.jpg no-repeat)";
        welcome.textContent = "Доброе утро";
    } else if (hour<18) {
        document.body.style.backgroundImage = "url(https://look.com.ua/pic/201403/1600x1200/look.com.ua-97182.jpg);"
        welcome.textContent = "Добрый день";
    } else  {
        document.body.style.backgroundImage = "url(https://99px.ru/sstorage/53/2011/05/tmb_14890_4778.jpg)";
        welcome.textContent = "Доброй ночи";
    }
}
 
 showTime();