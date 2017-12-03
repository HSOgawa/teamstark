$(document).ready(function(){
  $("#send").click(function(){
    // show message
    //$("#message").modal();
    // get data from user
    var name = document.getElementById("inputNome");
    var email = document.getElementById("inputEmail");
    var str = "data";
    $.ajax({
      type: "POST",
      url: "http://localhost/~hogawa/index.php",
      data: $(str).serialize(),
      success: function(){
        $("#message").modal();
      },
      error: function(){
        alert("Erro");
      }
    });
    req.console.error(function() { alert("Data not sent") });
  });
});
