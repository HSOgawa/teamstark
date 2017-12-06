function openDialog() {
              $("#content").dialog({
                  autoOpen: false,
                  position: 'center' ,
                  title: 'Optimus Solutions',
                  height: "500",
                  width: "100%",
                  resizable : false,
                  modal: true,
                  overflow: false,
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

			$("#content").load('/form2.html', function() {
				$("#content").dialog("open");
			});
};

