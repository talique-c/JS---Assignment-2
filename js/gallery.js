// -- VARIABLES --
// Make the images array
let smallImages = ['images/flowers-pink-small.jpg',
                   'images/flowers-purple-small.jpg',
                   'images/flowers-red-small.jpg',
                   'images/flowers-white-small.jpg',
                   'images/flowers-yellow-small.jpg'];

let largeImages = ['images/flowers-pink-large.jpg',
                   'images/flowers-purple-large.jpg',
                   'images/flowers-red-large.jpg',
                   'images/flowers-white-large.jpg',
                   'images/flowers-yellow-large.jpg'];

// Make an array for the figcaptions
let captions = ['A plethora of Dahlia flowers growing together in a field',
                'A photograph of some common bluebell flowers',
                'A photograph of poppies growing in a field',
                'Some Narcissus Actaea in bloom',
                'A field of blossoming sunflowers'];

// Counter variable
let count = 1;

// Variable for figcaption
var caption = document.querySelector('figcaption');

// Iterate through all images in the smallImages array
for (let i = 0; i < smallImages.length; i++) {
    // Create a new list item
    var imageListItem = document.createElement('li');
    // Create a new image element for the thumbnail
    var thumbnail = document.createElement('img');
    // Set the image src to be current image in the loop
    thumbnail.setAttribute('src', smallImages[i]);
    // Set the alt text to increment with the image in the loop
    thumbnail.setAttribute('alt', 'Flower image ' + count);
    count++;
    // Append the thumbnail images to the li list (imageListItem)
    imageListItem.appendChild(thumbnail);
    // Append the list items to the ul list
    imageList = document.querySelector('ul');
    imageList.appendChild(imageListItem); 

    // Adds the clicking functionality 
    thumbnail.onclick = function () {
        // Creates a variable from the img in the figure in the HTML
        largeThumbnail = document.getElementById('captionImage');
        // Set the image src to be the current index in the largeImages array
        largeThumbnail.setAttribute('src', largeImages[i]);
        // Set the caption to be the current index in the captions array
        caption.textContent = captions[i];
    }
}