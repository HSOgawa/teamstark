$(document).ready(function(){
              $("#content").dialog({
                  autoOpen: false,
                  position: 'center' ,
                  title: 'DOWNLOAD',
                  height: "auto",
                  width: "auto",
                  resizable : false,
                  modal : true
              });

             $("#ebook-btn").click( function () {
                  $("#content").load('/form2.html', function() {
                      $("#content").dialog("open");
                 });
               $("#dialog").position({
                          my: "center",
                          at: "center",
                          of: window
                 });
              });
              
  //     $("#ebook-btn").click( function () {
  //       $("#content-holder").load($(this).attr("/form2.html"));
  //       $("#content").dialog('open');
  //       return false;
  //   })
});
