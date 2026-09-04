// Validation pour la Salle 2 - Formulaires
document.addEventListener('DOMContentLoaded', function() {
    checkFormCorrections();
    
    // Vérifier périodiquement si les corrections ont été faites
    setInterval(checkFormCorrections, 2000);
});

function checkFormCorrections() {
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const nextRoomLink = document.getElementById('next-room');
    const form = document.getElementById('recruitment-form');
    
    let corrections = {
        formAction: false,
        labelsAssociated: false,
        ageValidation: false,
        emailType: false,
        selectValues: false,
        radioGrouping: false,
        textareaValidation: false
    };
    
    // Vérifier l'action du formulaire
    corrections.formAction = form.hasAttribute('action') && form.hasAttribute('method');
    
    // Vérifier les associations label-input
    const pirateNameLabel = document.querySelector('label[for="pirate-name"]');
    const ageLabel = document.querySelector('label[for="age"]');
    const emailLabel = document.querySelector('label[for="email"]');
    corrections.labelsAssociated = pirateNameLabel && ageLabel && emailLabel;
    
    // Vérifier la validation de l'âge
    const ageInput = document.getElementById('age');
    corrections.ageValidation = ageInput && ageInput.hasAttribute('min') && ageInput.hasAttribute('max');
    
    // Vérifier le type email
    const emailInput = document.getElementById('email');
    corrections.emailType = emailInput && emailInput.type === 'email';
    
    // Vérifier les values des options
    const options = document.querySelectorAll('#experience option');
    let hasValues = true;
    options.forEach((option, index) => {
        if (index > 0 && !option.hasAttribute('value')) {
            hasValues = false;
        }
    });
    corrections.selectValues = hasValues;
    
    // Vérifier le groupement des radio buttons
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const radioNames = Array.from(radioInputs).map(input => input.name);
    const uniqueNames = [...new Set(radioNames)];
    corrections.radioGrouping = uniqueNames.length === 1 && radioInputs.length === 3;
    
    // Vérifier la validation du textarea
    const textarea = document.getElementById('motivation');
    corrections.textareaValidation = textarea && (textarea.hasAttribute('required') || textarea.hasAttribute('minlength'));
    
    // Mettre à jour les indicateurs de progression
    updateProgressIndicator('check-form-action', corrections.formAction);
    updateProgressIndicator('check-labels', corrections.labelsAssociated);
    updateProgressIndicator('check-age-validation', corrections.ageValidation);
    updateProgressIndicator('check-email-type', corrections.emailType);
    updateProgressIndicator('check-select-values', corrections.selectValues);
    updateProgressIndicator('check-radio-group', corrections.radioGrouping);
    updateProgressIndicator('check-textarea', corrections.textareaValidation);
    
    const allCorrect = Object.values(corrections).every(correction => correction === true);
    
    if (allCorrect) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        nextRoomLink.classList.remove('disabled-link');
        
        // Configurer la redirection du formulaire
        form.action = 'salle3.html';
        form.method = 'GET';
        
        nextRoomLink.style.animation = 'pulse 1s infinite';
        
        console.log('🎉 Félicitations ! Salle 2 terminée avec succès !');
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        nextRoomLink.classList.add('disabled-link');
        
        // Debug info pour les instructeurs
        console.log('État des corrections:', corrections);
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