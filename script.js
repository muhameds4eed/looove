


// Add this to your script.js
window.onload = function () {
    var greeting = document.getElementById('greeting');
    setTimeout(function () {
        // Create flying hearts after the greeting disappears
        for (var i = 0; i < 10; i++) {
            var heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(heart);
        }
        greeting.style.display = 'none';
    }, 5000); // The greeting will disappear after 5 seconds
};