$(document).ready(function(){
 var cell;
  var adder = "_";
  
  
$("button").click(function(){
    removeAll();
    move();
  });

  function removeAll(){
    for(i=0; i<=5; i++){
      var text = "#_" + i;
      $(text).html('');  //flying pusheen
    }
    
  }


function move(){
  cell = Math.floor(Math.random()*7);
  var test = adder + cell;

  switch(test) {
    
      case "_0":
      $("#_0").html('<img src="img/Pusheen2.png">');  //flying pusheen
      break;

    case "_1":
      $("#_1").html('<img src="img/Pusheen3o.png" height = 100>');  //heart pusheen
      break;

    case "_2":
      $("#_2").html('<img src="img/Pusheen1.png">'); // standing pusheen
      break;

    case "_3":
      $("#_3").html('<img src="img/Pusheen0.png" width=150>'); // under bed pusheen
      break;

    case "_4":
      $("#_4").html('<img src="img/Pusheen5.png" height =60>');  //phone pusheen
      break;

    case "_5":
      $("#_5").html('<img src="img/Pusheen6.png" width =200>');  //phone pusheen
      break;
            
    }

  }
    
  
  });
                                