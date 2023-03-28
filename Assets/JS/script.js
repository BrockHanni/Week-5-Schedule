// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dayDate = document.getElementById("currentDay")
var dayTime = document.getElementById("currentTime")
var today = dayjs()
var newTime = dayjs().set('hour', 14).set('minute', 15).set('second', 0);
dayDate.textContent = today.format('MMMM DD, YYYY')
dayTime.textContent = newTime.format('h:mm a')
// added new time instead of today to make sure it was working

function nine() {
  var hour9 = document.getElementById("hour-9")
  var hour9Text = hour9.textContent.trim()
  var hour9Number = parseInt(hour9Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour9Number){
    hour9.classList.add("future")
  }
  if (hour9Number < hourNow){
    hour9.classList.add("past")
  }
  else if (hour9Number == hourNow){
    hour9.classList.add("present")
  }
}

function ten() {
  var hour10 = document.getElementById("hour-10")
  var hour10Text = hour10.textContent.trim()
  var hour10Number = parseInt(hour10Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour10Number){
    hour10.classList.add("future")
  }
  if (hour10Number < hourNow){
    hour10.classList.add("past")
  }
  else if (hour10Number == hourNow){
    hour10.classList.add("present")
  }
}

function eleven() {
  var hour11 = document.getElementById("hour-11")
  var hour11Text = hour11.textContent.trim()
  var hour11Number = parseInt(hour11Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour11Number){
    hour11.classList.add("future")
  }
  if (hour11Number < hourNow){
    hour11.classList.add("past")
  }
  else if (hour11Number == hourNow){
    hour11.classList.add("present")
  }
}

function twelve() {
  var hour12 = document.getElementById("hour-12")
  var hour12Text = hour12.textContent.trim()
  var hour12Number = parseInt(hour12Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour12Number){
    hour12.classList.add("future")
  }
  if (hour12Number < hourNow){
    hour12.classList.add("past")
  }
  else if (hour12Number == hourNow){
    hour12.classList.add("present")
  }
}

function one() {
  var hour1 = document.getElementById("hour-1")
  var hour1Text = hour1.textContent.trim()
  var hour1Number = parseInt(hour1Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour1Number){
    hour1.classList.add("future")
  }
  if (hour1Number < hourNow){
    hour1.classList.add("past")
  }
  else if (hour1Number == hourNow){
    hour1.classList.add("present")
  }
  document.getElementById('one').textContent = ('1 PM')
}

function two() {
  var hour2 = document.getElementById("hour-2")
  var hour2Text = hour2.textContent.trim()
  var hour2Number = parseInt(hour2Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour2Number){
    hour2.classList.add("future")
  }
  if (hour2Number < hourNow){
    hour2.classList.add("past")
  }
  else if (hour2Number == hourNow){
    hour2.classList.add("present")
  }
  document.getElementById('two').textContent = ('2 PM')
}

function three() {
  var hour3 = document.getElementById("hour-3")
  var hour3Text = hour3.textContent.trim()
  var hour3Number = parseInt(hour3Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour3Number){
    hour3.classList.add("future")
  }
  if (hour3Number < hourNow){
    hour3.classList.add("past")
  }
  else if (hour3Number == hourNow){
    hour3.classList.add("present")
  }
  document.getElementById('three').textContent = ('3 PM')
}

function four() {
  var hour4 = document.getElementById("hour-4")
  var hour4Text = hour4.textContent.trim()
  var hour4Number = parseInt(hour4Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour4Number){
    hour4.classList.add("future")
  }
  if (hour4Number < hourNow){
    hour4.classList.add("past")
  }
  else if (hour4Number == hourNow){
    hour4.classList.add("present")
  }
  document.getElementById('four').textContent = ('4 PM')
}

function five() {
  var hour5 = document.getElementById("hour-5")
  var hour5Text = hour5.textContent.trim()
  var hour5Number = parseInt(hour5Text.replace(/\D/g,''))
  var hourNow = parseInt(newTime.format('HH'))
  // added newTime instead of today to make sure its working

  if (hourNow < hour5Number){
    hour5.classList.add("future")
  }
  if (hour5Number < hourNow){
    hour5.classList.add("past")
  }
  else if (hour5Number == hourNow){
    hour5.classList.add("present")
  }
  document.getElementById('five').textContent = ('5 PM')
}
function hourbackground(){
  nine()
  ten()
  eleven()
  twelve()
  one()
  two()
  three()
  four()
  five()
} 
setInterval(hourbackground, 1000)
hourbackground()