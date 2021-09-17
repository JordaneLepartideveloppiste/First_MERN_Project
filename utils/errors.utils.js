module.exports.signUpErrors = (err) => {
    let errors = {pseudo: '', email: '', password: ''}

    if(err.message.includes('pseudo'))
        errors.pseudo = "Ton pseudo pose problème.";

    if(err.message.includes('email'))
        errors.email = "@ et .quelquechose";

    if(err.message.includes('password'))
        errors.password = "Ton mot de passe c'est 6 caractères minimum";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
      errors.email = "On comprend que tu veuilles un deuxième compte mais...";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
      errors.pseudo = "On ne copie pas le pseudo de son voisin!!!";

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = {email: "", password: "" };

        if (err.message.includes('email'))
            errors.email = "Tu as foiré un truc en tapant ton email !";
        if (err.message.includes('password'))
            errors.password = "Tu as tout cassé avec ton mot de passe !";

    return errors;
};

module.exports.uploadErrors = (err) => {
    let errors = {format: "", maxSize: ""};

        if(err.message.includes('invalid file'))
            errors.format = "Un carré dans un rond...";
        if(err.message.includes('max size'))
            errors.maxSize = "Aïe, il est trop gros.......ton fichier.";

    return errors;
}