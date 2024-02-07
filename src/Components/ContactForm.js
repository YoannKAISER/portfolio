import React from "react";


function ContactForm() {
    /*const nomInput = document.querySelector("#nom");
	const prenomInput = document.querySelector("#prenom");
	const emailInput = document.querySelector("#email");
	const demandeTextArea = document.querySelector("#demande");
    const validButton = document.querySelector("#validButton")
		validButton.disabled = true;
		if (nomInput.value !== "" && prenomInput.value !== "" && emailInput.value !== "" && demandeTextArea.value !== "") {
			validButton.style.background = "rgb(29, 97, 84, 1)";
			validButton.disabled = false;
			validButton.style.cursor = "pointer";
		}
		else {
			validButton.style.background = "rgb(167, 167, 167)";
			validButton.disabled = true;
			validButton.style.cursor = "default";
		};*/


    return (
        <form method="get" action="">
            <label htmlFor="nom">Votre nom ou nom de votre structure</label>
            <input type="text" name="nom" id="nom" autoComplete="family-name" />
            <label htmlFor="prenom">Votre prénom</label>
            <input type="text" name="prenom" id="prenom" autoComplete="given-name" />
            <label htmlFor="email">Votre e-mail</label>
            <input type="email" name="email" id="email" autoComplete="email" />
            <label htmlFor="demande">Votre demande</label>
            <textarea type="text" name="demande" id="demande" />
            <button style={{width:100}} id="validButton">Envoyer</button>
        </form>
    )
}

export default ContactForm;