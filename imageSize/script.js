function resizeImage(clickedImageId) {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (clickedImageId === 'image1') {
        image1.style.width = "150px";
        image1.style.height = "150px";
        image2.style.width = "250px";
        image2.style.height = "250px";
    } else {
        image1.style.width = "250px";
        image1.style.height = "250px";
        image2.style.width = "150px";
        image2.style.height = "150px";
    }
}
