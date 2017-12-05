$(document).ready(function(){
              $("#dialog").dialog({
                  autoOpen: false,
                  position: 'center' ,
                  title: 'DOWNLOAD',
                  draggable: false,
                  width : 300,
                  height : 300, 
                  resizable : false,
                  modal : true,
              });

              $("#ebook-btn").click( function () {
                  $("#dialog").load('/form2.html', function() {
                      $("#dialog").dialog("open");
                 });
              });
              
});
