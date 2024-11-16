window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#2980b9";
    } else {
        header.style.backgroundColor = "#3498db";
    }
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    target.scrollIntoView({ behavior: 'smooth' });
});

const projectLinks = document.querySelectorAll('.project a');
projectLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#e67e22";
    });

    link.addEventListener('mouseout', () => {
        link.style.color = "#3498db";
    });
});

window.addEventListener('scroll', () => {
    const projects = document.querySelectorAll('.project');
    const viewportHeight = window.innerHeight;

    projects.forEach(project => {
        const position = project.getBoundingClientRect().top;
        if (position < viewportHeight - 100) {
            project.classList.add('visible');
        } else {
            project.classList.remove('visible');
        }
    });
});

const styles = document.createElement('style');
styles.innerHTML = `
    .project {
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    .project.visible {
        opacity: 1;
    }
`;
document.head.appendChild(styles);

