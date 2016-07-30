$(document).ready(function(e){

    //load title
    var title = "Wellington";
    $('#Title').text(title);
    $('#header').text(title);

    //load image
    $('#image').attr("src","images/Capture.PNG");

    $('#navbar').click(function(){
        var $this = $(this);
        //dump to home page
        //$this.text("Clicked");
        window.location="NZView.html";
    });


});
//end ready


