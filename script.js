// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( '楽しもう！' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': 'white',
      'background-color': 'black'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://rukinetty.com">Ruki</a></p>' );
    $( 'footer a' ).css( 'color','pink' );
    $( 'footer' ).css( 'background','skyblue' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });

  $( '#ectionaside' ).click( function() {
    $('main').css( 'flex-direction','column-reverse' );
  });


});


// buttonSet3

$( function() {


    $( '#Menu1' ).click( function() {
      $( '.Menu1' ).text( '楽1' );
    });

    $( '#Menu2' ).click( function() {
      $( '.Menu2' ).text( '楽2' );
    });

    $( '#Menu3' ).click( function() {
      $( '.Menu3' ).text( '眠い1' );
    });

    $( '#Menu4' ).click( function() {
      $( '.Menu4' ).text( '眠い2' );
    });

    $( '#article1' ).click( function() {
      $( '.article1_text' ).text( '寝ましょう！' );
      $( '.article1_text' ).css( 'color','pink' );
      $( '.article1_text' ).css( 'background','skyblue' );
    });

    $( '#article2' ).click( function() {
      $( '.article2_text' ).text( '疲れてしまった、、、' );
      $( '.article2_text' ).css( 'color','white' );
      $( '.article2_text' ).css( 'background','black' );
    });

    $( '#aside' ).click( function() {
      $( 'aside' ).text( '今日は何をしましょうか？' );
    });

});
