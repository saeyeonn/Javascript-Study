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
    const element = event.target;

    // Check if the user clicked on a hide button
    if (element.className === 'hide') {
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