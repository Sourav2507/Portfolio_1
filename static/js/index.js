const li = document.querySelectorAll('.links a');
const sec = document.querySelectorAll('section');

function active_Menu() {
    let currentSection = null;

    sec.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 450 && rect.bottom >= 120) {
            currentSection = section;
        }
    });

    li.forEach(link => link.classList.remove('active'));

    if (currentSection) {
        const id = currentSection.getAttribute('id');
        const activeLink = document.querySelector(`.links a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

window.addEventListener('scroll', active_Menu);
window.addEventListener('load', active_Menu);

const moonIconUrl = "{{ url_for('static', filename='images/moon.png') }}";
    const sunIconUrl = "{{ url_for('static', filename='images/sun.png') }}";

    function toggleTheme() {
        const body = document.body;
        const icon = document.getElementById("themeIcon");

        body.classList.toggle("dark-mode");

        const isDark = body.classList.contains("dark-mode");
        icon.src = isDark ? sunIconUrl : moonIconUrl;
    }

function togglePopup1(){
    document.getElementById('popup-1').classList.toggle("active");
}
function togglePopup2(){
    document.getElementById('popup-2').classList.toggle("active");
}
function togglePopup3(){
    document.getElementById('popup-3').classList.toggle("active");
}