
import { band_data } from "./band_data.js";
let whole_band = "";
for(let band_member = 0; band_member < 3; band_member++){
  let current_member = band_data().members[band_member];
  whole_band += `<div class="row">`
  for(let row_counter = 0; row_counter < 3; row_counter++){
    whole_band += `

      <div class="col-sm-4">
        <p class="text-center">
          <strong>${current_member.stage_name}</strong>
        </p>
        <br>
        <a href="#demo" data-toggle="collapse">
          <img src="${current_member.picture_location}" class="img-circle person" alt="Random Name" width="255" height="255">
        </a>
        <div id="demo" class="collapse">
          <p>Guitarist and Lead Vocalist</p>
          <p>Loves long walks on the beach</p>
          <p>Member since 1988</p>
        </div>
      </div>

    `
  }
  whole_band += `</div>`
}
$("#band").append(whole_band);

// need each row to have exactly 3 pictures
// check css to see if having multiple rows affects the display when swithcing to mobile view