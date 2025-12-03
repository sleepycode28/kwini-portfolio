
document.addEventListener('DOMContentLoaded', () => {
    const scrapbookContainer = document.querySelector('.project-images-scrapbook');

    // If the scrapbook container isn't on this page, exit.
    if (!scrapbookContainer) {
        return;
    }

    const images = Array.from(scrapbookContainer.querySelectorAll('.scrapbook-image'));

    const adjustScrapbookHeight = () => {
        // Reset height to let it naturally collapse first, crucial for resizing the window smaller
        scrapbookContainer.style.height = 'auto';

        let maxBottom = 0;
        
        // Get container's top offset relative to the document
        const containerTop = scrapbookContainer.offsetTop;

        images.forEach(image => {
            // Calculate image's bottom offset relative to the document
            const imageBottom = image.offsetTop + image.offsetHeight;
            if (imageBottom > maxBottom) {
                maxBottom = imageBottom;
            }
        });

        // The required height for the container is the difference
        // between the lowest image's bottom and the container's top.
        const requiredHeight = maxBottom - containerTop;
        
        // Only set the height if it needs to be larger than its current size.
        // We add a 20px buffer for shadows or any other visual overflow.
        if(requiredHeight > scrapbookContainer.offsetHeight){
            scrapbookContainer.style.height = `${requiredHeight + 20}px`;
        }
    };

    // Add click listener to images
    images.forEach(image => {
        image.addEventListener('click', () => {
            const wasOnTop = image.classList.contains('is-on-top');
            // Remove the .is-on-top class from all images
            images.forEach(img => img.classList.remove('is-on-top'));
            // If the image wasn't already on top, make it on top.
            if (!wasOnTop) {
                image.classList.add('is-on-top');
            }
            // Wait for the CSS transform (0.3s) to finish before recalculating the height
            setTimeout(adjustScrapbookHeight, 300); 
        });
    });

    // --- Main Event Listeners ---

    // Use window.load to ensure all content, including images, is fully loaded
    window.addEventListener('load', adjustScrapbookHeight);

    // Recalculate on window resize
    window.addEventListener('resize', adjustScrapbookHeight);
});
