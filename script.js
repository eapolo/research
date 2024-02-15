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

        // Shuffle array and take the first 6 items
        const shuffledIcons = icons.sort(() => 0.5 - Math.random()).slice(0, 6);

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




document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.blog-container');
  let items = Array.from(container.children);

  // Sort items by date
  items.sort((a, b) => new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date')));

  // Initially display only the three most recent entries
  const visibleCount = 3;
  items.forEach((item, index) => {
    item.style.display = index < visibleCount ? 'block' : 'none'; // Ensure older entries are hidden
  });

  // Append sorted items back to the container
  items.forEach(item => container.appendChild(item));

  // "View History" button functionality
  const viewHistoryBtn = document.getElementById('view-history');
  viewHistoryBtn.addEventListener('click', function() {
    // Show all items
    items.forEach(item => {
      item.style.display = 'block';
    });
    // Hide the "View History" button
    viewHistoryBtn.style.display = 'none';
  });
});



