import { config } from './secrets.js';

$("#contact-btn").on("click",(e)=>{
  // send email
  let current_date = new Date();
  let userContactForm = {
    userName: $("#name").val(),
    userEmail: $("#email").val(),
    userComments: $("#comments").val(),
    date: current_date.toLocaleString()
  }
  $.post(`${config().databaseURL}/.json`, JSON.stringify(userContactForm));
  console.log('contact btn clicked',e);
})
