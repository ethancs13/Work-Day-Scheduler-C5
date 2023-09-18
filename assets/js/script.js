var saveBtn = document.querySelectorAll('.saveBtn')

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  for (let i = 0; i < saveBtn.length; i++) { // Add event listener to all Save Buttons
    const element = saveBtn[i];
    $(element).on('click', save_to_storage)
  }


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for (i = 0; i < 18; i++){
    if (localStorage.getItem('hour-' + i)){
      $('#hour-' + i).children()[1].innerText = localStorage.getItem('hour-' + i)
    } else {
    }
    
  }


  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(dayjs().format('MMMM D, YYYY h:mm A'))
});

function save_to_storage(e) {
  console.log(this)

  for(f = 0; f < 5; f++){

    var el = $(this).parent()
    

    var name = el.attr('id') + ""
    var val = el.children()[1].value + ""

    console.log(el.children())

    localStorage.setItem(name, val)
  }
}