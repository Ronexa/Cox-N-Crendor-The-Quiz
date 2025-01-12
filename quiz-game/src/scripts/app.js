var images = ['images/jesse.png', 'images/brain.jpg', 'images/safa.png'];
var lastIndex = -1;

function changeImage() {
    var img = document.getElementById('displayedImage');
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;
    img.src = images[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    changeImage();

    document.getElementById('jesseButton').addEventListener('click', function() {
        alert('You selected Jesse!');
        changeImage();
    });

    document.getElementById('crendorButton').addEventListener('click', function() {
        alert('You selected Crendor!');
        changeImage();
    });
});