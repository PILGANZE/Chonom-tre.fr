// Variables globales
let sp, start, stop, t; // Variables pour les éléments HTML et le timer
let s = 0, mn = 0, h = 0; // Initialisation des secondes, minutes et heures

// Initialisation des valeurs au chargement de la page
window.onload = function () {
    // Lien avec les éléments HTML
    sp = document.getElementsByTagName('p'); // Sélectionne tous les paragraphes (<p>) pour afficher le temps
    start = document.getElementById('One'); // Sélectionne le bouton "Commencer" par son ID
    stop = document.getElementById('Two'); // Sélectionne le bouton "Stopper" par son ID

    // Initialisation de la variable de l'intervalle (timer)
    t = null; // Aucun intervalle actif au départ
};

// Le compteur
function Compteur() {
    s += 1; // Incrémenter les secondes

    // Si les secondes atteignent 60, les réinitialiser et incrémenter les minutes
    if (s === 60) {
        s = 0; // Réinitialiser les secondes
        mn += 1; // Incrémenter les minutes
    }

    // Si les minutes atteignent 60, les réinitialiser et incrémenter les heures
    if (mn === 60) {
        mn = 0; // Réinitialiser les minutes
        h += 1; // Incrémenter les heures
    }

    // Mise à jour des valeurs dans les balises HTML correspondantes
    sp[0].innerHTML = h + "h:"; // Mettre à jour les heures
    sp[1].innerHTML = mn + "min:"; // Mettre à jour les minutes
    sp[2].innerHTML = s + "s:"; // Mettre à jour les secondes
}

// Fonction pour le bouton "Commencer"
function Go() {
    if (!t) { // Empêche plusieurs démarrages simultanés
        t = setInterval(Compteur, 1000); // Exécuter la fonction "Compteur" toutes les 1 seconde
        start.disabled = true; // Désactiver le bouton "Commencer" pour éviter de relancer le timer
    }
}

// Fonction pour le bouton "Stopper"
function Stop() {
    clearInterval(t); // Arrêter l'intervalle actif
    t = null; // Réinitialiser la variable d'intervalle pour indiquer qu'il n'y a plus de timer actif
    start.disabled = false; // Réactiver le bouton "Commencer"
}

// Fonction pour remettre à zéro
function Zero() {
    clearInterval(t); // Arrêter l'intervalle actif
    t = null; // Réinitialiser la variable d'intervalle
    start.disabled = false; // Réactiver le bouton "Commencer"
    s = 0; mn = 0; h = 0; // Réinitialiser les valeurs de temps

    // Mise à jour des valeurs dans les balises HTML
    sp[0].innerHTML = h + "h:"; // Réinitialiser l'affichage des heures
    sp[1].innerHTML = mn + "min:"; // Réinitialiser l'affichage des minutes
    sp[2].innerHTML = s + "s:"; // Réinitialiser l'affichage des secondes
}
