let messagePrefix = 'Attention: ';
export default function afficherMessage(monMessage){
    alert(messagePrefix + monMessage);
}

export function formatMessage(monMessage) {
    return messagePrefix + monMessage;
}