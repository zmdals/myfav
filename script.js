function updateTime() {
  var dateInfo = new Date();

  /* time */
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min + ":" + sec;

  // print time
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;

  /* date */
  var dow = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    day = dateInfo.getDate();

  /* store date
  var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;*/
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);

//Click Effect JS START
$( "button" ).click(function() {
  $( ".overlay" ).toggleClass( "transition" );
  });
//Click Effect JS END

//Night Handler START
var Links={
  setColor:function(color){
  // var alist = document.querySelectorAll('a');
  // var i = 0
  // while(i<alist.length){
  // console.log(alist[i]);
  // alist[i].style.color = color;
  // i = i + 1;
  // }
  $('a').css('color',color);
  }
}
var Body = {
  setColor:function (color){
  // document.querySelector('body').style.color = color;
  $('body').css('color' , color);
},
  setBackgroundColor:function(color){
  // document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor' , color);
}

}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value  = 'day';
  
      LinksSetColor('powderblue');
      }
  
  else{
      Body.setBackgroundColor('white');
      Body.setColor('black'); 
      self.value = 'night';
  
      Links.setColor('blue');
      }
  }
//Night Handler END