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