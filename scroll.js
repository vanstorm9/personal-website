    if(jQuery){
      alert("YUS");

     } else {

      alert("LOL NOPE")
     }
     if(jQuery.DatePicker){
      alert("YUS AGAIN");
     } else {
      alert("SURRY D:")
     }




    function goToByScroll(id){
      alert("Hi Scroll");
          // Reove "link" from the ID
        id = id.replace("link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }

    $("#sidebar > ul > li > a").click(function(e) { 
      alert("Hello scrolling man");
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll($(this).attr("id"));           
    });

    

        