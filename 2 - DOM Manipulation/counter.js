let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
    
    if (counter % 10 === 0) {
        // Template Literal : 전체 표현식을 `로 감싸야 함
        // * 메시지를 사용자 정의하기 위해 문자열 형식화
        alert(`Count is now ${counter}`); 
    }
}

// 페이지 로드 시간 소요 -> JS가 버튼 렌더링 전에 실행 -> 에러 발생
// addEventListener 이용하여 페이지 로드 후에만 코드 실행하도록 변경
// 인수 : 감지할 이벤트 + 이벤트 감지 시 실행할 함수 (현재는 익명 함수 사용)
document.addEventListener('DOMContentLoaded', function() {
    // 괄호 없이 함수 이름만 지정 = 버튼이 클릭될 때만 해당 함수 호출
    // 함수형 프로그래밍 지원 -> 함수도 값으로 취급 가능
    document.querySelector('button').onclick = count;
});
