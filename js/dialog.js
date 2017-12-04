$(document).ready(function(){
              $("#dialog").dialog({
                  autoOpen: false,
                  position: 'center' ,
                  title: 'EDIT',
                  draggable: false,
                  width : 300,
                  height : 40, 
                  resizable : false,
                  modal : true,
              });

              //$("a.delete-href").click( function() {
              $('.conheca-ebook').on('click', function () {
                //  $("#dialog").load('/form2.html', function() {
                      $("#dialog").dialog("open");
                 // });
              });
              
});
