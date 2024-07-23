function openResume() {
    window.open('https://drive.google.com/file/d/1GjDW0l1AkdrWs9DcsT2gGMAIAtmcOU3Z/view?usp=sharing', '_blank');
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
