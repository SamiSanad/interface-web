// Validation pour la Salle 3 - Types d'input et code secret
document.addEventListener('DOMContentLoaded', function() {
    checkFinalCorrections();
    
    // Vérifier périodiquement si les corrections ont été faites
    setInterval(checkFinalCorrections, 2000);
    
    // Vérifier aussi quand l'utilisateur saisit du texte
    document.getElementById('secret-code').addEventListener('input', checkFinalCorrections);
    
    // Vérifier aussi quand l'utilisateur saisit du texte
    document.getElementById('secret-code').addEventListener('input', checkFinalCorrections);
});

function checkFinalCorrections() {
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const finalRoomLink = document.getElementById('final-room');
    
    // Vérifications
    const captainNameInput = document.getElementById('captain-name');
    const secretCodeInput = document.getElementById('secret-code');
    const treasureSelect = document.getElementById('treasure-type');
    
    let corrections = {
        captainReadOnly: false,
        phoneInputType: false,
        correctCode: false
    };
    
    // Vérifier que le nom du capitaine est en lecture seule
    corrections.captainReadOnly = captainNameInput.hasAttribute('readonly') || captainNameInput.hasAttribute('disabled');
    
    // Vérifier que le champ code secret a le bon type (tel)
    corrections.phoneInputType = secretCodeInput.type === 'tel';
    
    // Vérifier que le code saisi est correct
    const enteredCode = secretCodeInput.value.trim();
    corrections.correctCode = enteredCode === '123-456-7890';
    
    const allCorrect = Object.values(corrections).every(correction => correction === true);
    
    if (allCorrect) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        finalRoomLink.classList.remove('disabled-link');
        
        finalRoomLink.style.animation = 'treasure-glow 1s infinite';
        
        // Ajouter des effets visuels de succès
        document.body.style.background = 'linear-gradient(45deg, #FFD700, #FFA500, #FF6347)';
        
        console.log('🏆 TRÉSOR TROUVÉ ! Félicitations pour avoir terminé l\'escape room !');
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        finalRoomLink.classList.add('disabled-link');
        
        // Messages d'aide spécifiques
        let helpMessage = '❌ Problèmes détectés : ';
        if (!corrections.phoneInputType) {
            helpMessage += 'Le type du champ code secret doit être "tel". ';
        }
        if (!corrections.captainReadOnly) {
            helpMessage += 'Le nom du capitaine doit être en lecture seule. ';
        }
        if (!corrections.correctCode) {
            helpMessage += 'Le code secret n\'est pas correct (cherchez dans les commentaires !). ';
        }
        
        errorMessage.innerHTML = helpMessage;
        
        // Debug info pour les instructeurs
        console.log('État des corrections:', corrections);
        console.log('Code saisi:', enteredCode);
    }
}

// Animation CSS pour l'effet trésor
const style = document.createElement('style');
style.textContent = `
    @keyframes treasure-glow {
        0% { 
            transform: scale(1); 
            box-shadow: 0 0 10px gold;
        }
        50% { 
            transform: scale(1.1); 
            box-shadow: 0 0 20px gold, 0 0 30px orange;
        }
        100% { 
            transform: scale(1); 
            box-shadow: 0 0 10px gold;
        }
    }
`;
document.head.appendChild(style);