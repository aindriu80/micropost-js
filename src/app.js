 import { http } from './http';
 import { ui } from './ui';

 // Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add posts
document.querySelector('.post-submit').addEventListener('click', submitPosts);

// Get Posts
function getPosts() {
     http.get('http://localhost:3000/posts')
     .then(data => ui.showPosts(data))
     .catch(err => console.log(err));
}


// Submit Posts
function submitPosts() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#title').value;

    const data = {
        title,
        body,
    }
    // Create Post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            getPosts();
        })
        .catch(err => console.log(err));
}