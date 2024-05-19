const technologies = [
    { name: 'VirtualBox', src: 'img/technologies/virtualbox.svg', description: 'VirtualBox is a free and open-source hosted hypervisor.' },
    { name: 'AWS', src: 'img/technologies/aws.svg', description: 'Amazon Web Services (AWS) is a cloud computing platform.' },
    { name: 'Docker', src: 'img/technologies/docker.svg', description: 'Docker is a platform for developing, shipping, and running applications.' },
    { name: 'Google Analytics', src: 'img/technologies/google-analytics.svg', description: 'Google Analytics is a web analytics service offered by Google.' },
    { name: 'Kubernetes', src: 'img/technologies/kubernetes.svg', description: 'Kubernetes is an open-source container orchestration platform.' },
    { name: 'Linux', src: 'img/technologies/linux.svg', description: 'Linux is an open-source operating system.' },
    { name: 'MySQL', src: 'img/technologies/mysql.svg', description: 'MySQL is an open-source relational database management system.' },
    { name: 'Photoshop', src: 'img/technologies/photoshop.svg', description: 'Photoshop is a raster graphics editor developed by Adobe.' },
    { name: 'Apache', src: 'img/technologies/apache.svg', description: 'Apache is a widely used web server software.' },
    { name: 'WooCommerce', src: 'img/technologies/woocommerce.svg', description: 'WooCommerce is an open-source e-commerce plugin for WordPress.' },
    { name: 'WordPress', src: 'img/technologies/wordpress.svg', description: 'WordPress is a free and open-source content management system.' }
];

const logosContainer = document.getElementById('logos-container');
let activePopup = null;

technologies.forEach(tech => {
    const img = document.createElement('img');
    img.src = tech.src;
    img.alt = tech.name;
    img.title = tech.description;

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = tech.description;

    img.addEventListener('click', (event) => {
        console.log("Image clicked");
        if (activePopup !== popup) {
            // Close any previously active popup
            if (activePopup) {
                activePopup.classList.remove('active');
            }
            // Show the clicked logo's popup
            activePopup = popup;
            activePopup.classList.add('active');
            // Position the popup relative to the clicked logo
            const logoRect = event.target.getBoundingClientRect();
            popup.style.top = logoRect.top + logoRect.height + 'px';
            popup.style.left = logoRect.left + 'px';
        } else {
            // Clicking on the same logo again should close the popup
            activePopup.classList.remove('active');
            activePopup = null;
        }
    });
    

    popup.addEventListener('click', () => {
        // Clicking on the popup itself should close it
        popup.classList.remove('active');
        activePopup = null;
    });

    logosContainer.appendChild(img);
    document.body.appendChild(popup); // Append popups to body to prevent stacking context issues
});

// Add scroll event listener to hide popup on scroll
window.addEventListener('scroll', () => {
    if (activePopup) {
        activePopup.classList.remove('active');
        activePopup = null;
    }
});
