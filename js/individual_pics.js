
import { band_data } from "./band_data.js";
let whole_band = "";
for(let band_member = 0; band_member < 10; ){

  whole_band += `<div class="row">`;
  for(let row_counter = 0; row_counter < 3; row_counter++, band_member++){
    let current_member = band_data().members[band_member];
    current_member === undefined 
    ? whole_band += `<div class="col-sm-4"></div>`
    : whole_band += `
      <div class="col-sm-4 band-member">
        <br>
        <a href="#demo" data-toggle="collapse">
        <img src="${current_member.picture_location}" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <p class="text-center">
          <strong>${current_member.stage_name}</strong>
        </p>
        <div >
          <p>${current_member.role}</p>
          <p>${current_member.quote}</p>
        </div>
        <hr>
      </div>
    `
  }

  whole_band += `</div>`

}
$("#band").append(whole_band);

// need each row to have exactly 3 pictures
// check css to see if having multiple rows affects the display when swithcing to mobile view