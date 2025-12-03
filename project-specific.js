document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.scrapbook-image');
    let topZIndex = images.length;

    images.forEach(image => {
        image.addEventListener('click', () => {
            // Remove 'is-on-top' from all other images
            images.forEach(img => {
                if (img !== image) {
                    img.classList.remove('is-on-top');
                    // Reset z-index to its default order
                    const initialZ = Array.from(images).indexOf(img) + 1;
                    img.style.zIndex = initialZ;
                }
            });

            // Apply 'is-on-top' to the clicked image
            if (!image.classList.contains('is-on-top')) {
                topZIndex++;
                image.style.zIndex = topZIndex;
                image.classList.add('is-on-top');
            } 
        });
    });
});
