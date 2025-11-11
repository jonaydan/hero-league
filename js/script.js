// ========================================
// BASE DE DONNÉES DES HÉROS
// ========================================
const heroes = [
    {
        id: 1,
        name: "Catastrophic",
        realName: "???",
        description: "Un héros mystérieux aux pouvoirs dévastateurs",
        powers: "Force destructrice, manipulation de l'énergie",
        image: "ressources/images/catastrophic.png"
    },
    {
        id: 2,
        name: "Carotte Woman",
        realName: "Caroline Potager",
        description: "La gardienne des légumes et de la nutrition",
        powers: "Vision nocturne, super santé, régénération",
        image: "ressources/images/carotte-woman.png"
    },
    {
        id: 3,
        name: "Ultraquenarde",
        realName: "Ultra Canard",
        description: "Le plus rapide des palmipèdes volants",
        powers: "Vol supersonique, résistance aquatique",
        image: "ressources/images/ultraquenarde.png"
    },
    {
        id: 4,
        name: "Poulpy",
        realName: "Paul Pieuvre",
        description: "Maître des profondeurs marines",
        powers: "Huit tentacules, camouflage, intelligence marine",
        image: "ressources/images/poulpy.png"
    },
    {
        id: 5,
        name: "Oran Wu-Tang Clan",
        realName: "Orange Warrior",
        description: "Guerrier martial aux techniques légendaires",
        powers: "Arts martiaux, agilité supreme, énergie vitaminée",
        image: "ressources/images/oran-wu-tang-clan.png"
    },
    {
        id: 6,
        name: "Superime",
        realName: "Supreme Hero",
        description: "Le héros ultime au pouvoir inégalé",
        powers: "Super force, vol, invulnérabilité",
        image: "ressources/images/superime.png"
    }
];

// ========================================
// FONCTIONS D'AFFICHAGE DES HÉROS
// ========================================

// Fonction pour afficher tous les héros dans la grille
function displayHeroes() {
    const heroGrid = document.querySelector('.hero-grid');
    if (!heroGrid) return;

    // Vider le conteneur
    heroGrid.innerHTML = '';

    // Créer une carte pour chaque héros
    heroes.forEach(hero => {
        const heroCard = createHeroCard(hero);
        heroGrid.appendChild(heroCard);
    });
}

// Fonction pour créer une carte de héros avec microdonnées Schema.org
function createHeroCard(hero) {
    const card = document.createElement('div');
    card.className = 'hero-card';
    // Ajouter les attributs Schema.org pour le SEO
    card.setAttribute('itemscope', '');
    card.setAttribute('itemtype', 'https://schema.org/Person');
    
    card.innerHTML = `
        <img src="${hero.image}" 
             alt="${hero.name} - ${hero.description}" 
             itemprop="image"
             loading="lazy">
        <div class="hero-info">
            <h3 itemprop="name">${hero.name}</h3>
            <p><strong>Identité :</strong> <span itemprop="alternateName">${hero.realName}</span></p>
            <p itemprop="description">${hero.description}</p>
            <p><strong>Pouvoirs :</strong> <span itemprop="knowsAbout">${hero.powers}</span></p>
            <meta itemprop="jobTitle" content="Super-héros">
            <meta itemprop="memberOf" content="Heros League">
        </div>
        <div class="hero-hover-text">Disponible maintenant !</div>
    `;

    // Ajouter un effet de clic pour afficher les détails
    card.addEventListener('click', () => {
        showHeroDetails(hero);
    });

    return card;
}

// Afficher les détails d'un héros dans une alerte
function showHeroDetails(hero) {
    const message = `
🦸 ${hero.name}
━━━━━━━━━━━━━━━━━━━━━

👤 Identité : ${hero.realName}
📝 Description : ${hero.description}
⚡ Pouvoirs : ${hero.powers}

✅ Disponible pour intervention !
    `.trim();
    
    alert(message);
}

// ========================================
// ANIMATIONS ET INTERACTIONS
// ========================================

// Animation du header au scroll
function initHeaderAnimation() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
}

// Scroll fluide vers les sections
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Gestion du formulaire de contact
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Afficher un message de confirmation
        alert(`✅ Merci ${name} !\n\nVotre demande d'urgence a été reçue.\nUn héros vous contactera bientôt à ${email}.`);
        
        // Réinitialiser le formulaire
        contactForm.reset();
        
        // Log pour debug
        console.log('📧 Formulaire soumis:', { name, email, message });
    });
}

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🦸 Heroes League - Application chargée avec succès!');
    console.log(`📊 Nombre de héros disponibles: ${heroes.length}`);
    
    // Initialiser toutes les fonctionnalités
    displayHeroes();
    initHeaderAnimation();
    initSmoothScroll();
    initContactForm();
    
    console.log('✅ Toutes les fonctionnalités sont actives !');
});
