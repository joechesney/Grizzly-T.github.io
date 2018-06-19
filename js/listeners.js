
$("#contact-btn").on("click",(e)=>{
  // send email or some shit
  let userContactForm = {
    userName: $("#name").val(),
    userEmail: $("#email").val(),
    userComments: $("#comments").val(),
  }
  $.ajax({
    type: "POST",
    data: userContactForm,
    url: "https://grizzly-t.firebaseio.com/"
  }, (response)=>{
    console.log('response: ',response);
  })
  // console.log('contact btn clicked',e);
})