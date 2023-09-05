function sendMail(event) {
    event.preventDefault();

    var params = {
        from_name: document.getElementById("fullName").value,
        input_company: document.getElementById("input_company").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_zfytkpp", "template_40lylv9", params)
        .then(function (response) {
            console.log("Erfolgreich gesendet:", response);
            alert("Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.");

            // Formularfelder manuell zurücksetzen
            document.getElementById("fullName").value = "";
            document.getElementById("input_company").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("message").value = "";
            
        })
        .catch(function (error) {
            console.log("Fehler beim Senden:", error);
            alert("Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.");
        });
}