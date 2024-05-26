// animation-iteration-count 를 1보다 높이면 애니메이션 반복
// 무한 설정 -> 무한한 애니메이션 가능
// 다양한 측면을 변경하기 위한 많은 애니메이션 속성 존재
// JS 로 더욱 세밀한 애니메이션 제어 가능

document.addEventListener('DOMContentLoaded', function() {
    // Find heading
    const h1 = document.querySelector('h1');

    // Pause Animation by default
    h1.style.animationPlayState = 'paused';

    // Wait for button to be clicked
    document.querySelector('button').onclick = () => {

        // If animation is currently paused, begin playing it
        if (h1.style.animationPlayState == 'paused') {
            h1.style.animationPlayState = 'running';
        }

        // Otherwise, pause the animation
        else {
            h1.style.animationPlayState = 'paused';
        }
    }

})

// If hide button is clicked, delete the post
document.addEventListener('click', event => {
    // Find what was clicked on
    // event.target -> 클릭한 항목에 접근 가능
    const element = event.target;

    // Check if the user clicked on a hide button
    if (element.className === 'hide') {
        // parentElement class : DOM 에서 주어진 요소의 부모 찾기 위해 사용
        element.parentElement.style.animationPlayState = 'running';
        element.parentElement.addEventListener('animationend', () => {
            element.parentElement.remove();
        });
    }
    
});

// Add a new post with given contents to DOM
function add_post(contents) {
    // Create new post
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `${contents} <button class="hide">Hide</button>`;

    // Add post to DOM
    document.querySelector('#posts').append(post);
};