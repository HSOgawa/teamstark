function sendRequest(form) {

    Reset(form);
    if (form == 1) {
        var name = document.getElementById("inputNome").value;
        var email = document.getElementById("inputEmail").value;
        var categoria = $('input[name="categoria"]:checked').val();
    }
    else {
        var name = document.getElementById("inputNome2").value;
        var email = document.getElementById("inputEmail2").value;
        var categoria = $('input[name="categoria2"]:checked').val();
    }

    if (name == "" || email == "" || !categoria) {
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
        if (!categoria) {
            if (form == 1)
                document.getElementById("categoriaErro").textContent = "Por favor selecione uma opção";
            else
                document.getElementById("categoriaErro2").textContent = "Por favor selecione uma opção";
        }

    }
    else {

        $.post("../handledata.php",
        { nome: name, email: email, categoria: categoria })
                .done(function (data) {
                    window.location.href = "downloadpdf.php";
                });
        Reset(form);
        if (form == 1) {
            document.getElementById("inputNome").value = "";
            document.getElementById("inputEmail").value = "";
            $('input[name="categoria"]').prop('checked', false);
        }
        else {
            document.getElementById("inputNome2").value = "";
            document.getElementById("inputEmail2").value = "";
            $('input[name="categoria2"]').prop('checked', false);
        }
    }
    return false;
};

function Reset(form) {
    if (form == 1) {
        document.getElementById("nomeErro").textContent = "";
        document.getElementById("emailErro").textContent = "";
        document.getElementById("categoriaErro").textContent = "";
    }
    else {
        document.getElementById("nomeErro2").textContent = "";
        document.getElementById("emailErro2").textContent = "";
        document.getElementById("categoriaErro2").textContent = "";
    }
}
