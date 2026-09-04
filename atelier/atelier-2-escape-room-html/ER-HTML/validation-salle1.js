// Validation pour la Salle 1 - Éléments sémantiques
document.addEventListener('DOMContentLoaded', function() {
    checkSemanticCorrections();
    
    // Vérifier périodiquement si les corrections ont été faites
    setInterval(checkSemanticCorrections, 2000);
});

function checkSemanticCorrections() {
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const nextRoomLink = document.getElementById('next-room');
    
    // Vérifier que les éléments sémantiques corrects sont présents
    const hasArticle = document.querySelector('article') !== null;
    const hasAside = document.querySelector('aside') !== null;
    const hasNav = document.querySelector('nav') !== null;
    const hasFooterInMain = document.querySelector('main footer, .room-container footer') !== null;
    
    // Vérifier que les anciennes divs avec classe broken-element ont été corrigées
    const brokenElements = document.querySelectorAll('.broken-element');
    const remainingBrokenDivs = Array.from(brokenElements).filter(el => el.tagName === 'DIV');
    
    // Mettre à jour les indicateurs de progression
    updateProgressIndicator('check-article', hasArticle);
    updateProgressIndicator('check-aside', hasAside);
    updateProgressIndicator('check-nav', hasNav);
    updateProgressIndicator('check-footer', hasFooterInMain);
    
    const allCorrect = hasArticle && hasAside && hasNav && hasFooterInMain && remainingBrokenDivs.length === 0;
    
    if (allCorrect) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        nextRoomLink.classList.remove('disabled-link');
        
        // Ajouter un effet visuel de succès
        nextRoomLink.style.animation = 'pulse 1s infinite';
        
        console.log('🎉 Félicitations ! Salle 1 terminée avec succès !');
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        nextRoomLink.classList.add('disabled-link');
        
        // Debug info pour les instructeurs
        console.log('État des corrections:');
        console.log('- Article présent:', hasArticle);
        console.log('- Aside présent:', hasAside);
        console.log('- Nav présent:', hasNav);
        console.log('- Footer dans main présent:', hasFooterInMain);
        console.log('- Divs cassées restantes:', remainingBrokenDivs.length);
    }
}

function updateProgressIndicator(checkId, isCompleted) {
    const checkItem = document.getElementById(checkId);
    const statusIcon = checkItem.querySelector('.status-icon');
    
    if (isCompleted) {
        statusIcon.textContent = '✅';
        checkItem.classList.remove('incomplete');
        checkItem.classList.add('completed');
    } else {
        statusIcon.textContent = '🏴‍☠️';
        checkItem.classList.remove('completed');
        checkItem.classList.add('incomplete');
    }
}

// Animation CSS pour le bouton de succès
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);