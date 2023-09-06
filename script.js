function scrollToProjects() {
    const projectsSection = document.getElementById ("my-projects");
    const yOffset = -300;

    if (projectsSection) {
        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo ({ top: y, behavior: 'smooth'});
    }
}

function scrollToTop () {
    const topElement = document.getElementById("top");
    const yOffset = -300;

    if (topElement) {
        const y = topElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}