

$(document).ready(function(){
  $("form#fortune-quiz").submit(function(event){
    event.preventDefault();
    // var fortune = [];
    var unlucky = 0;
    var lucky = 0;
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unlucky++;
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      lucky++;
    });

    if (unlucky === 0 && lucky === 0){
      alert("Please check at least one box, or no one will have any fun.");
    }else if(lucky - unlucky > 2){
      $('#meh').hide();
      $('#woe').hide();
      $('#weal').show();
    }else if(lucky - unlucky > -2){
      $('#woe').hide();
      $('#weal').hide();
      $('#meh').show();
    }else{
      $('#weal').hide();
      $('#meh').hide();
      $('#woe').show();
    }

    //  $('#work-responses').append(fortune + "<br>");

    $('#transportation_survey').hide();
    // $("#work-responses").show();
  });
});
