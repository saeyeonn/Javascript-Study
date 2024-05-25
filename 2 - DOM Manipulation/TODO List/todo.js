// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {

    // Select the submit button and input to be used later
    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    // Disable submit button by default:
    submit.disabled = true;

    // Listen for input to be typed into the input field
    newTask.onkeyup = () => {
        // .length -> 문자열 / 배열 등의 객체 길이 구하기
        if (newTask.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    // Listen for submission of form
    document.querySelector('form').onsubmit = () => {

        // Find the task the user just submitted
        const task = newTask.value;

        // Create a list item for the new task and add the task to it
        // createElement 로 HTML 요소 생성 가능 
        const li = document.createElement('li');
        li.innerHTML = task;

        // Add new element to our unordered list:
        // append 함수로 위에 생성한 HTML 요소를 DOM에 추가
        document.querySelector('#tasks').append(li);

        // Clear out input field:
        newTask.value = '';

        // Disable the submit button again:
        submit.disabled = true;

        // 폼의 기본 제출 방지
        // 현재 페이지 다시 로드 / 새 페이질 리디렉션 포함
        return false;
    }
});