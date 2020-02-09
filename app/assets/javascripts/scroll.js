$(function(){
  console.log("OK");
  function scrolltoTop() {
    $('html,body').animate({scrollTop:0});
  }
  function scrolltoUser() {
    $('html,body').animate({scrollTop:254});
  }
  function scrolltoWorks() {
    $('html,body').animate({scrollTop:1440});
  }
  function scrooltoContact() {
    $('html,body').animate({scrollTop:2635});
  }
  $(".top").click(function(){
    scrolltoTop()
  });
  $(".head_manu_manu1").click(function(){
    scrolltoUser()
  })
  $(".head_manu_manu2").click(function(){
    scrolltoWorks()
  })
  $(".head_manu_manu3").click(function(){
    scrooltoContact()
  })
});

// hoverメソッド
$(function() {
  console.log('22')
  $('.icon').hover(
    function() {
      $(this).css('font-size','72px');
    },
    function() {
      $(this).css('font-size','70px');
    }
  );
  $('.btn.btn-primary').hover(
    function() {
      $(this).css('font-size','18px');
    },
    function() {
      $(this).css('font-size','15px');
    }
  );
  $('.top').hover(
    function() {
      $(this).css('color','red');
    },
    function() {
      $(this).css('color','black');
    }
  );
});