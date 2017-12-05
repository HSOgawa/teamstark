$(document).ready(function(){
    
            $("#send").click(function(){

                          var name = document.getElementById("inputNome").value;
                          var email = document.getElementById("inputEmail").value;

                            if (name == "" || email == "")
                            {            
                                if (name == "")
                                   document.getElementById("nomeErro").textContent = "Por favor insira seu nome";
                                if (email == "")
                                   document.getElementById("emailErro").textContent = "Por favor insira seu e-mail";
                            }
                                else
                            {     
                                                    document.getElementById("nomeErro").textContent = "";
                                                    document.getElementById("emailErro").textContent = "";

                                          $.post("../handledata.php",
                                          {nome : nome.value, email : email.value})
                                                  .done(function(data){
                                                    alert("Dados enviados");
                                                    window.location.href = "downloadpdf.php";
                                                  });
                                        });
                            }
                        //req.console.error(function() { alert("Data not sent") });
          });
    
});
