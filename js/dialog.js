$(document).ready(function(){
              $("#content").dialog({
                  autoOpen: false,
               //   position: 'center' ,
                  title: 'DOWNLOAD',
                  height: "auto",
                  width: "auto",
                  resizable : false,
                  modal : true,
                  position: {
                              my: "center",
                              at: "center",
                              of: window,
                              collision: "none"
                             },
                create: function (event, ui) {
                               $(event.target).parent().css('position', 'fixed');
                              },
                close: function(event, ui ) {
                              //$("#content").dialog("close");      
                              location.reload();
                             }
              });
});

              function openDialog() {
                  $("#content").load('/form2.html', function() {
                      $("#content").dialog("open");
                 });
              };
