function sendRequest(form) {

    if (form == 1) {
        var name = document.getElementById("inputNome").value;
        var email = document.getElementById("inputEmail").value;
    }
    else {
        var name = document.getElementById("inputNome2").value;
        var email = document.getElementById("inputEmail2").value;
    }

    if (name == "" || email == "") {
        if (name == "") {
            if (form == 1)
                document.getElementById("nomeErro").textContent = "Por favor insira seu nome";
            else
                document.getElementById("nomeErro2").textContent = "Por favor insira seu nome";
        }
        if (email == "") {
            if (form == 1)
                document.getElementById("emailErro").textContent = "Por favor insira seu e-mail";
            else
                document.getElementById("emailErro2").textContent = "Por favor insira seu e-mail";
        }
    }
    else {
        if (form == 1) {
            document.getElementById("nomeErro").textContent = "";
            document.getElementById("emailErro").textContent = "";
            document.getElementById("inputNome").value = "";
            document.getElementById("inputEmail").value = "";
        }
        else {
            document.getElementById("nomeErro2").textContent = "";
            document.getElementById("emailErro2").textContent = "";
            document.getElementById("inputNome2").value = "";
            document.getElementById("inputEmail2").value = "";
        }

        $.post("../handledata.php",
        { nome: name, email: email })
                .done(function (data) {
                    window.location.href = "downloadpdf.php";
                });
    }
    return false;
};
