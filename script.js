document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enterButton");
    const landingPage = document.querySelector(".landing");
    const mainContent = document.getElementById("mainContent");
    const popupSections = document.querySelectorAll('.clickable');
    const body = document.body;

    // Function to handle button click
    enterButton.addEventListener("click", function() {
        // Hide landing page and show main content
        landingPage.style.display = "none";
        mainContent.style.display = "block";
    });

    // Add event listeners to each button
    const buttons = document.querySelectorAll("nav ul li a");
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const sectionId = button.getAttribute("href").substring(1); // Get section ID
            // Scroll to the clicked section
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add click event listeners to all clickable sections
    popupSections.forEach(section => {
        section.addEventListener('click', event => togglePopup(section, event));
    });

    // Add click event listener to the document body to close popup when clicked outside
    document.body.addEventListener('click', event => {
        // Close any currently open popups if the click target is not a popup or its child element
        if (!event.target.closest('.popup')) {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.classList.remove('popup');
            });
        }
    });

    // Function to toggle the popup state
    function togglePopup(clickedSection, event) {
        // Close all other popups
        document.querySelectorAll('.popup').forEach(popup => {
            if (popup !== clickedSection) {
                popup.classList.remove('popup');
            }
        });

        // Toggle the popup state for the clicked section
        clickedSection.classList.toggle('popup');

        // Prevent default behavior of event to avoid closing the popup immediately
        event.stopPropagation();
    }
    
});
