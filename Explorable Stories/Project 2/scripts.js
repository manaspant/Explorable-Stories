var selectCup;
var selectTea;


//Choosing the clicked pot and removing all of them after selection has been made to bring in text
$(".clicker-pot").click(function(event) {
    var loc = $(event.target);
    $(".Tea-pot-text,.Tea-pot-div, .hide-text").fadeOut();
    $(".tea-pot-info, #Tea-pot3").fadeIn();
    $('.leaves, .leave').show();
});


//When the button to select the tea leaves is pressed the hidden chart made using chart js shows up in its div.
//Each button is connected to a particular chart 

$(".clicker-leave").click(function(event) {
    var loc = $(this).attr('id');
    console.log(loc);
    if (loc === 'show1') {
      $("#portfolio3").show();
      $(".infographic1").show();
      $(".infographic1-text").show();
    }
    if (loc == 'show2') {
      $("#portfolio3").show();
      $(".infographic2").show();
      $(".infographic2-text").show();
    }
    if (loc == 'show3') {
      $("#portfolio3").show();
      $(".infographic3").show();
      $(".infographic3-text").show();
    }
    if (loc == 'show4') {
      $("#portfolio3").show();
      $(".infographic4").show();
      $(".infographic4-text").show();
    }    

    $(".leaf-info").fadeOut();
    $(".tea-leave-info").fadeIn();

});

//Choosing Cup and putting the chosen cup in the next div where the final teacup is served
$(".clicker-cup").click(function(event) {
    //var selectCup = $(this).attr('id');
    var selectCup = $(this);
    console.log(selectCup);

    $(".hide-cup").fadeOut();
    $(".hide-text1").fadeOut();
    $(".tea-cup-info").fadeIn();
    $("#portfolio2").show();
    $("#portfolio4").show();

    selectCup.appendTo("#cup-holder");
});



//refresh at end
$('#refresh').click(function() {
  setTimeout(location.reload.bind(location), 2000);
    // location.reload();
});

//making chart js charts for the nutritional value of different tea
new Chart($("#pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Calories", "Sodium", "Potassium", "Total Carbs", "Caffeine"],
      datasets: [{
        label: "gms",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2,7,17,470,150]
      }]
    },
    options: {
      legend: {
        labels: {
          fontColor: "black"
        } 
      },
      title: {
        display: true,
        text: 'Nutritional Info Green Tea',
        fontColor: "black"
      }
    }
});

new Chart($("#pie-chart1"), {
    type: 'pie',
    data: {
      labels: ["Calories", "Sodium", "Potassium", "Total Carbs", "Caffeine"],
      datasets: [{
        label: "gms",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [0,0,0,0,30]
      }]
    },
    options: {
      legend: {
        labels: {
          fontColor: "black"
        } 
      },
      title: {
        display: true,
        text: 'Nutritional Info Oolong Tea',
        fontColor: "black"
      }
    }
});

new Chart($("#pie-chart2"), {
    type: 'pie',
    data: {
      labels: ["Calories", "Sodium", "Potassium", "Total Carbs", "Caffeine"],
      datasets: [{
        label: "gms",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2,0,0,0,45]
      }]
    },
    options: {
      legend: {
        labels: {
          fontColor: "black"
        } 
      },
      title: {
        display: true,
        text: 'Nutritional Info White Tea',
        fontColor: "black"
      }
    }
});

new Chart($("#pie-chart3"), {
    type: 'pie',
    data: {
      labels: ["Calories", "Sodium", "Potassium", "Total Carbs", "Caffeine"],
      datasets: [{
        label: "gms",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2,7,88,700,47]
      }]
    },
    options: {
      legend: {
        labels: {
          fontColor: "black"
        } 
      },
      title: {
        display: true,
        text: 'Nutritional Info Black Tea',
        fontColor: "black"
      }
    }
});