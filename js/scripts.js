

$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=unlucky]:checked").each(function(){
      var fortune = $(this).val();
      var unlucky = 0;
      var lucky = 0;

      for(var i = 0; i < fortune.length; i++){
        if(fortune[i] === "unlucky"){
          unlucky++;
        } else if (fortune[i] === "lucky") {
          lucky++;
        }
      }
      if(lucky > unlucky){
        $(#weal).show();
      }else if(unlucky > lucky){
        $(#woe).show();
      }

    //  $('#work-responses').append(fortune + "<br>");
    });
    $('#transportation_survey').hide();
    // $("#work-responses").show();
  });
});
