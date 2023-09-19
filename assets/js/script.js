var saveBtn = document.querySelectorAll('.saveBtn')

$(function () {

  for (let i = 0; i < saveBtn.length; i++) { // Add event listener to all Save Buttons
    const element = saveBtn[i];
      // listener for click events on the save button.
    $(element).on('click', save_to_storage)
  }


  // apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 


  $('.container-lg').children().each((index, element) => {
    // console.log("hour: " + dayjs().hour() + "    " + "index: " + (index-(-10)))
    // console.log(dayjs().hour())

    if (dayjs().hour() > (index-(-9))) {

      $(element).addClass('past')
      // future
      console.log("past")
      
    } else if (dayjs().hour() < (index-(-9))) {

      $(element).addClass('future')
      // past
      console.log("future")

    } else {

      $(element).addClass('present')
      //  present
      console.log("present")
    }
  })

  // get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  for (i = 0; i < 18; i++){
    if (localStorage.getItem('hour-' + i)){
      $('#hour-' + i).children()[1].innerText = localStorage.getItem('hour-' + i)
    } else {
    }
  }


  // display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MMMM D, YYYY h:mm A'))
});

function save_to_storage(e) { // save to storage function

  for(f = 0; f < 5; f++){
    var el = $(this).parent()
    var name = el.attr('id') + "" // get the hour of the day using id
    var val = el.children()[1].value + "" // turn the value into a string
    // console.log(el.children())
    localStorage.setItem(name, val) // store in localStorage
  }
}