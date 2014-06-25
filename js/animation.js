window.Animation = {

  initialize: function (divs) {

    $.each(divs, function () {
      setInterval(function () {
        this.css({background: 'black'});
      }, 1);
    });

//    for (i = 0; i < divs.length; i++) {
//      div = divs[i]
//      setInterval(function () {
//        div.css({background: 'black'})
//      }, 1);
////      setInterval(divs[i].css({background: 'white'}), 2000);
//    }
  }
};