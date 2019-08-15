$(document).ready(function(){




  $("#list").submit(function(event) {

    $(".animal").hide();

    event.preventDefault();

    var selection = $("select#dropdown").val()

    console.log(selection);

    if (selection === "brownbear") {
      console.log("bear if has been selected")
      $("#" + selection).show();
    }
    else if (selection === "blackpeppersnake") {
      console.log("black pepper snake if has been selected")
      $("#" + selection).show();
    }
    else if (selection === "wildbeet") {
      console.log("beet if has been selected")
      $("#" + selection).show();
    }
    else {
      $("#error").show();
    }



    
    // else (selection === blackpeppersnake) {
    //     $("#"+selection).show();
    //
    //   }


  });

});
