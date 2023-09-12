console.log("JavaScript is working!");

function scrollToProjects() {
    const projectsSection = document.getElementById("my-projects");
    console.log("projectsSection:", projectsSection); // Debugging line
    const yOffset = -300;

    if (projectsSection) {
        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

function scrollToTop() {
    const topElement = document.getElementById("top");
    console.log("topElement:", topElement); // Debugging line
    const yOffset = -300;

    if (topElement) {
        const y = topElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

/* Video funktioner */

// Function to open the modal with the specified video URL
function openVideoModal(videoUrl) {
    console.log("Opening video modal with URL:", videoUrl);
    const modal = document.getElementById("videoModal");
    console.log("modal:", modal); // Debugging line

    modal.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    modal.style.display = "block";
}

// Attach a click event listener to each project text container
const projectTextContainers = document.querySelectorAll(".project-text-container");
projectTextContainers.forEach(container => {
    container.addEventListener("click", function () {
        // Find the closest project
        const project = this.closest(".project");
        if (project) {
            // Find the associated .project-img-container within the project
            const projectImgContainer = project.querySelector(".project-img-container");
            if (projectImgContainer) {
                const videoUrl = projectImgContainer.getAttribute("data-video");
                console.log("Clicked on text container with URL:", videoUrl);
                openVideoModal(videoUrl);
            }
        }
    });
});


// Function to close the modal
function closeVideoModal() {
    console.log("Closing video modal");
    const modal = document.getElementById("videoModal");
    console.log("modal:", modal); // Debugging line
    modal.style.display = "none";
}
