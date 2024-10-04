const galleryImages = document.querySelectorAll('.gallery img');
const viewer = document.querySelector('.viewer');
const closeViewerButton = document.querySelector('.close-viewer');
const menu = document.querySelector(".menu");

galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
        const fullImagePath = e.target.src.replace('sm', 'full');
        viewer.querySelector('img').src = fullImagePath;
        viewer.style.display = 'grid';  // Display the viewer
    });
});

function handleResize() {
  if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
  } else {
      menu.classList.add("hide");
  }
}

function toggleMenu() {
    menu.classList.toggle("hide")
}

function viewHandler(event) {
    const target = event.target;
    console.dir(target)
    const imgSrc = event.target.src.split("-");
    const newSrc = imgSrc[0] + "-full.jepg";
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, target.alt));
    document
        .querySelector(".close-viewer")
        .addEventListener("click", closeViewer)

    // document.querySelector("main").addEventListener("click", closeViewerButton)
}

function closeViewer() {
    document.querySelector(".viewer")?.remove();

  }
window.addEventListener("resize", handleResize);
menu-button.addEventListener("click", toggleMenu);
galleryImages.addEventListener("resize", handleResize)