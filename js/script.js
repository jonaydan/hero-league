// Base de données des héros
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

// Fonction pour afficher les héros
function displayHeroes() {
    const heroesContainer = document.getElementById('heroes-container');
    heroesContainer.innerHTML = '';

    heroes.forEach(hero => {
        const heroCard = createHeroCard(hero);
        heroesContainer.appendChild(heroCard);
    });
}

// Fonction pour créer une carte de héros
function createHeroCard(hero) {
    const card = document.createElement('div');
    card.className = 'hero-card';
    card.innerHTML = `
        <img src="${hero.image}" alt="${hero.name}" class="hero-image">
        <div class="hero-info">
            <h3>${hero.name}</h3>
            <p><strong>Identité :</strong> ${hero.realName}</p>
            <p>${hero.description}</p>
            <p class="powers"><strong>Pouvoirs :</strong> ${hero.powers}</p>
        </div>
    `;

    // Ajouter un effet de clic
    card.addEventListener('click', () => {
        alert(`Vous avez sélectionné ${hero.name}!\n\nIdentité: ${hero.realName}\n${hero.description}`);
    });

    return card;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    displayHeroes();
    
    // Animation du bouton CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('heroes').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

// Message de bienvenue dans la console
console.log('🦸 Heroes League - Application chargée avec succès!');
console.log(`📊 Nombre de héros: ${heroes.length}`);
