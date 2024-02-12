document.addEventListener('DOMContentLoaded', function() {
    const icons = [
        'assets/img/universityofseville.png',
        'assets/img/universityofugent.png',
        'assets/img/universityofwageningen.jpeg',
        'assets/img/universityofkuleven.webp',
        // Add more icon paths as needed
    ];

    function updateGallery() {
        const gallery = document.getElementById('iconGallery');
        gallery.innerHTML = ''; // Clear current icons

        // Shuffle array and take the first 3 items
        const shuffledIcons = icons.sort(() => 0.5 - Math.random()).slice(0, 4);

        // Add the selected icons to the gallery
        shuffledIcons.forEach(icon => {
            const img = document.createElement('img');
            img.src = icon;
            img.alt = 'Icon';
            gallery.appendChild(img);
        });
    }

    // Update the gallery every 3 seconds
    setInterval(updateGallery, 3000);

    // Initial update
    updateGallery();
});
