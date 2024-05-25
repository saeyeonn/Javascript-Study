// 기존 사이트는 페이지 다시 로드하면 모든 정보 손실
// * 변수 및 세팅 초기화, 모든 작업 삭제, ...
// * 사용자가 사이트로 돌아올 때 사용 가능한 정보 저장하고 싶을 때 local storage 사용
// * 브라우저가 닫힐 때 정보 삭제하고 싶지 않을 때 local storage 사용
// * 브라우저가 닫힐 때 모든 정보 삭제하고 싶을 때 session storage 사용
// * 사용자 웹 브라우저에 정보 저장하는 방법도 존재
// * key - value set로 저장됨

// Check if there is already a vlaue in local storage
// 주어진 키로 로컬 저장소에서 항목 검색 -> 해당 키와 관련된 값 반환
if (!localStorage.getItem('counter')) {

    // If not, set the counter to 0 in local storage
    // 로컬 저장소에 항목 추가 -> 키와 값으로 구성
    localStorage.setItem('counter', 0);
}
            
function count() {
    // Retrieve counter value from local storage
    let counter = localStorage.getItem('counter');

    // update counter
    counter++;
    document.querySelector('h1').innerHTML = counter;

    // Store counter in local storage
    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', function() {
    // Set heading to the current value inside local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
});