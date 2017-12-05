$(document).ready(function(){
    
  $("form[name='userForm']").validate({
    rules: {
      inputNome: "required",
      inputEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      inputNome: "Please enter your name",
      inputEmail: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
//});
    
    
    $("#send").click(function(){
      
      var name = document.getElementById("inputNome").value;
      var email = document.getElementById("inputEmail").value;
      
        if (name == "" || email == "")
            alert("Campos vazios");
            else
            {                
        $.ajax({
            url:"handledata.php", 
            type: "POST",
            dataType: 'JSON',
            data: 'name='+name+'&email='+email,
            data: {name: name, email: email},
            success:function(result){
                 // document.getElementById("inputNome").reset();
                //  document.getElementById("inputEmail").reset();
                  alert(result);
               //   Download(); //TODO: Function do download do ebook
            },
            error: function(){
               alert("Erro");
            }
         
        //prevent form from submitting
        //return false;
    });
            }
    //req.console.error(function() { alert("Data not sent") });
  });
});
