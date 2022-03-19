var shown = 1;
$("#changeText").click(function() {
    if(shown == 1) {
       $("#text1").css("display", "none");
       $("#text2").css("display", "block");
       shown = 2;
    } else {
       $("#text2").css("display", "none");
       $("#text1").css("display", "block");
       shown = 1;
    }
});