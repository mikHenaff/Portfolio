window.addEventListener('DOMContentLoaded', () => {

    const scrollDownBtn1 = document.getElementById('scroll-down-1');
    const pageHeight = window.innerHeight;

    scrollDownBtn1.addEventListener('click', () => {

        window.scroll({
            top: pageHeight,
            behavior: 'smooth'
        });

    });

    const scrollDownBtn2 = document.getElementById('scroll-down-2');

    scrollDownBtn2.addEventListener('click', () => {

        window.scroll({
            top: (pageHeight * 2),
            behavior: 'smooth'
        });

    });

    const scrollUpBtn1 = document.getElementById('scroll-up-1');

    scrollUpBtn1.addEventListener('click', () => {

        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

    });

    const scrollUpBtn2 = document.getElementById('scroll-up-2');

    scrollUpBtn2.addEventListener('click', () => {

        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

    });

    const modalContainer = document.getElementById('modal-container');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    modalTriggers.forEach(trigger => trigger.addEventListener('click', () => {

        modalContainer.classList.toggle('active');

    }))

    const mediaPhone = window.matchMedia("(max-width: 550px)");
    const mediaPhoneLandscape = window.matchMedia("(max-width: 800px)");
    const mediaLandscape = window.matchMedia("(orientation: landscape)");

    const btns = document.querySelectorAll('.scroll-btn');
    const profile = document.getElementById('profile');
    const profilePara = document.createElement('p');
    const profileImg = document.getElementById('profile-img');
    const profileText = document.getElementById('profile-text');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const projectDesc = document.createElement('p');
    const project = document.getElementById('project');
    const projectImg = document.getElementById('project-img');
    const email = document.getElementById('email');
    const hoverImage = document.getElementById('hover-image');
    const home = document.getElementById('home');
    const cv = document.getElementById('cv');
    const projectsTitle = document.getElementById('projects-title');

    if (mediaPhone.matches || mediaPhoneLandscape.matches && mediaLandscape.matches) {

        btns.forEach(btn => btn.style.display = "none");

        profileImg.style.margin = "30px";
        profileImg.style.width = "100px";
        profileImg.style.height = "120px";
        profileImg.style.border = "1px solid #fff";
        profileImg.style.outline = "none";
        profileImg.style.display = "inline-block";

        profileText.style.display = "none";

        profile.appendChild(profilePara);
        profilePara.innerHTML = "Bonjour !<br>Je suis <strong>Mikael Henaff</strong><br><strong>Développeur Web Junior</strong>";
        profilePara.style.color = "#ddd";
        profilePara.style.fontSize = "1.5rem";
        profilePara.style.marginTop = "-110px";
        profilePara.style.marginRight = "50px";

        about.style.height = "fit-content";

        email.style.display = "none";

        projects.style.height = "fit-content";
        projects.appendChild(projectDesc);
        projects.style.paddingBottom = "80px";
        projectDesc.innerHTML = "<h3>Technos:</h3><br><ul><li>HTML/CSS</li><li>Javascript</li><li>PHP</li><li>MySQL</li></ul><br><br><h3>Description:</h3><br><p>Une <strong>application cinéma</strong> qui permet à l'utilisateur de <strong>se créer un compte</strong> et de <strong>collectionner les infos relatives aux films de sa vidéothèque</strong>, de s'informer sur les films les plus récents, les plus populaires ou ceux bientôt en salle, et de rechercher des infos par titre de film.</p>";
        projectDesc.style.textAlign = "justify";
        projectDesc.style.fontSize = "1.3rem";
        projectDesc.style.marginTop = "20px";
        projectDesc.style.width = "80%";

        project.style.marginTop = "-90px";

        projectImg.style.cursor = "default";

        modalContainer.style.display = "none";
        hoverImage.style.display = "none";

    }

    if (mediaPhone.matches) {

        home.style.backgroundSize = "cover";
        home.style.backgroundPosition = "25% 50%";

        cv.style.width = "80%";

        projectsTitle.style.textAlign = "center";

        projectImg.style.width = "300px";
        projectImg.style.height = "200px";

    }

    if (mediaPhoneLandscape.matches && mediaLandscape.matches) {

        profile.style.flexDirection = "row";
        profile.style.justifyContent = "space-between";

    }

});