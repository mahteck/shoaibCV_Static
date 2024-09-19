window.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSkillsButton');
    const skillsSection = document.getElementById('skills');

    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', () => {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        });
    } else {
        console.error('Skills section or toggle button not found in the DOM.');
    }
});