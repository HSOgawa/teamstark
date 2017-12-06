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
                                          {nome : name, email : email})
                                                  .done(function(data){
                                                    window.location.href = "downloadpdf.php";
													window.setTimeout(function(){location.reload();}, 2000);
                                                  });
                            }
                        return false;
          });
});

