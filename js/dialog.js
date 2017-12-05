$(document).ready(function(){
              $("#content").dialog({
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
                  $("#content").load('/form2.html', function() {
                      $("#content").dialog("open");
                 });
              });
              
  //     $("#ebook-btn").click( function () {
  //       $("#content-holder").load($(this).attr("/form2.html"));
  //       $("#content").dialog('open');
  //       return false;
  //   })
});
