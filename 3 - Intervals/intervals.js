let counter = 0;
            
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;

    // 이벤트 발생 시 함수 실행하는 것 외에도 일정 시간이 지난 후 함수가 실행되도록 설정 가능
    // setInterval : 파라미터 =  실행할 함수 & 실행 사이 시간
    // -> 사용자가 아무것도 클릭하지 않아도 카운터 증가
    setInterval(count, 1000);
});
