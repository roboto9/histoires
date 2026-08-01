// Fonction pour détecter la langue du navigateur
function detecterLangueNavigateur() {
    const langueNavigateur = navigator.language || navigator.userLanguage;
    
    // Extraire le code de langue principal (fr, en, ru)
    const codeLangue = langueNavigateur.split('-')[0];
    
    // Vérifier si la langue est supportée
    if (traductions[codeLangue]) {
        return codeLangue;
    }
    
    // Langue par défaut : français
    return 'fr';
}

// Fonction pour changer la langue
function changerLangue(langue) {
    // Vérifier si la langue existe dans nos traductions
    if (!traductions[langue]) {
        console.error(`Langue ${langue} non supportée`);
        return;
    }
    
    // Mettre à jour tous les éléments avec des IDs correspondants
    for (const [id, texte] of Object.entries(traductions[langue])) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = texte;
        }
    }
    
    // Mettre à jour le titre de la page
    document.title = traductions[langue]["titre-page"];
    
    // Mettre à jour l'attribut lang de la balise HTML
    document.documentElement.lang = langue;
    
    // Sauvegarder la préférence de langue
    localStorage.setItem('languePreferee', langue);
    
    // Mettre à jour les boutons de langue (actif/inactif)
    mettreAJourBoutonsLangue(langue);
}

// Fonction pour mettre à jour l'état des boutons de langue
function mettreAJourBoutonsLangue(langueActive) {
    const boutons = document.querySelectorAll('.lang-btn');
    boutons.forEach(bouton => {
        bouton.classList.remove('active');
    });
    
    const boutonActif = document.getElementById(`btn-${langueActive}`);
    if (boutonActif) {
        boutonActif.classList.add('active');
    }
}

// Fonction d'initialisation au chargement de la page
function initialiserLangue() {
    // Vérifier si une préférence de langue est stockée
    const langueStockee = localStorage.getItem('languePreferee');
    
    let langueACharger;
    
    if (langueStockee && traductions[langueStockee]) {
        // Utiliser la langue stockée
        langueACharger = langueStockee;
    } else {
        // Détecter la langue du navigateur
        langueACharger = detecterLangueNavigateur();
    }
    
    // Appliquer la langue
    changerLangue(langueACharger);
}

// Ajouter des écouteurs d'événements pour les boutons de langue
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la langue au chargement
    initialiserLangue();
    
    // Ajouter des écouteurs pour les boutons de langue
    document.getElementById('btn-fr').addEventListener('click', function() {
        changerLangue('fr');
    });
    
    document.getElementById('btn-en').addEventListener('click', function() {
        changerLangue('en');
    });
    
    document.getElementById('btn-ru').addEventListener('click', function() {
        changerLangue('ru');
    });
    
    // Ajouter un défilement fluide pour les liens de navigation
    document.querySelectorAll('.section-nav a').forEach(ancre => {
        ancre.addEventListener('click', function(e) {
            e.preventDefault();
            const cible = document.querySelector(this.getAttribute('href'));
            if (cible) {
                cible.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Détection des changements de langue du navigateur en temps réel
window.addEventListener('languagechange', function() {
    // Ne mettre à jour que si aucune préférence n'est stockée
    if (!localStorage.getItem('languePreferee')) {
        const nouvelleLangue = detecterLangueNavigateur();
        changerLangue(nouvelleLangue);
    }
});