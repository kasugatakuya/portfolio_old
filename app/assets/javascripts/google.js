$(document).ready(function () {
  $("#googleform").submit(function (event) {
      var name = $("#googleform #name").val();
      var email = $("#googleform #email").val();
      var textarea = $("#googleform #textarea").val();

      $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSctTB3nEsqAHqGPD6kWTd-3l9WczQHit3Y0jPb91zM0oFCvmw/formResponse",
          data: {
              "entry.1535126923": name,
              "emailAddress": email,
              "entry.1734148990": textarea
          },
          type: "POST",
          dataType: "xml",
          statusCode: {
              0: function () {
                  //送信に成功したときの処理
                  $("form").slideUp();
                  $('#success').slideDown();
              },
              200: function () {
                  //送信に失敗したときの処理
                  $("form").slideUp();
                  $('#error').slideDown();
              }
          }
      });
      event.preventDefault();
  });
});