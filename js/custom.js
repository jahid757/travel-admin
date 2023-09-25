"use strict"

function renderItineraryForm(){
    let html=``;
    const numberOfItineraryItems = document.getElementById('optionId').value;
    const parent = document.getElementById('itinerary_form')
    for (let i = 0; i < numberOfItineraryItems; i++) {
        html+=`
        <h5>Day <span>${i+1}</span></h5>
        <div class="form-group w-100">
          <label for="tour-title">Title</label>
          <input
            id="deals-title"
            type="text"
            class="form-control input-default"
            placeholder="Title "
          />
        </div>
        <div class="form-group">
          <label for="tour-desc">Description</label>
          <textarea
            class="form-control h-150px"
            rows="6"
            id="deals-desc"
            placeholder="Description"
          ></textarea>
        </div>
        `
    }

    parent.innerHTML = '';
    parent.innerHTML = html;
    // console.log(html)

}