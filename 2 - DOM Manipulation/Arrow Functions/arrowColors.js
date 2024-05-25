let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
    
    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
    }
}

// 입력 / 없을 시 괄호 뒤에 => 적으면 이어서 실행할 코드가 오는 화살표 함수
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        // JS에서 감지될 수 있는 이벤트 종류 다양
        // onclick, onmouseover, onkeydown, onkeyup, onload, onblur, ...
        button.onclick = () => {
            document.querySelector("#hello").style.color = button.dataset.color;
        }
    });
});
