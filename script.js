// Function to open specific modal by ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }
}

// Function to close specific modal by ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    }
}

// Close modal if user clicks outside of the modal content box
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
