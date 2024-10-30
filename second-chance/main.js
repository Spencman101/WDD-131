const rebuilds = [
    {
        id: 1,
        beforeSrc: 'images/vehicle/bayou5.webp',
        beforeAlt: 'bayou_before',
        afterSrc: 'images/vehicle/bayou1.webp',
        afterAlt: 'bayou_after',
        description: "While our family was living in Louisiana Covid hit and we needed something to do with our time. Dad decided to buy a salvaged jeep and rebuild it as a family. Through this project, I watched him teach our kids about cars, tools, and the processes of taking something old and broken and giving it a second chance. My favorite part was watching my children and husband laugh and smile while strengthening their relationships with each other."
    },
    {
        id: 2,
        beforeSrc: 'images/vehicle/karma2.webp',
        beforeAlt: 'karma_before',
        afterSrc: 'images/vehicle/karma3.webp',
        afterAlt: 'karma_after',
        description: ""
    },
    {
        id: 3,
        beforeSrc: 'images/vehicle/sabotage2.webp',
        beforeAlt: 'sabotage_before',
        afterSrc: 'images/vehicle/sabotage3.webp',
        afterAlt: 'sabotage_after',
        description: "I was able to build and design my dream Jeep with my dad. It was a fun process learning more about cars and how to fix them. Being able to be a part of the whole process was such a wonderful experience. My blood, sweat, and tears went into this project, but I wouldn't have it any other way. It gave me the opportunity to learn and grow and I wouldn't change this experience for the world."
    },
    {
        id: 4,
        beforeSrc: 'images/vehicle/solstice1.webp',
        beforeAlt: 'solstice_before',
        afterSrc: 'images/vehicle/solstice2.webp',
        afterAlt: 'solstice_after',
        description: ''
    },
];

const slideshowContent = document.body.querySelector('#slideshow-container');

rebuilds.forEach((rebuild) => {
	const newRebuild = document.createElement('div');
	newRebuild.classList.add('rebuild');
	
	const rebuildHTML = `
		<div class="numbertext">${rebuild.id} / ${rebuilds.length}</div>
        <img src="${rebuild.beforeSrc}" style="width:100%" alt="${rebuild.beforeAlt}">
        <img src="${rebuild.afterSrc}" style="width:100%" alt="${rebuild.afterAlt}">
        <div class="text">${rebuild.description}</div>
	`;

	newRebuild.innerHTML = rebuildHTML;
	slideshowContent.appendChild(newRebuild);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("rebuild");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "grid";
    dots[slideIndex-1].className += " active";
}