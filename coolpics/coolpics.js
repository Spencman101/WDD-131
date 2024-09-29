const galleryImages = document.querySelectorAll('.gallery img');
const viewer = document.querySelector('.viewer');
const closeViewerButton = document.querySelector('.close-viewer');

galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
        const fullImagePath = e.target.src.replace('sm', 'full');
        viewer.querySelector('img').src = fullImagePath;
        viewer.style.display = 'grid';  // Display the viewer
    });
});

closeViewerButton.addEventListener('click', () => {
    viewer.style.display = 'none';  // Hide the viewer when "X" is clicked
});

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
  } else {
      menu.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
document.querySelector(".menu-button").addEventListener("click", toggleMenu);
