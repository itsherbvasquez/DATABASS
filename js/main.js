var apiUrl = 'http://worldclockapi.com/api/json/est/now';

function bindClickEvent (){
  $('#get-time').click(function(){
    getTimeWithAjax();
  //  getTimeUsingGet();
  });
};

function getTimeStringFromData(data){
  return 'It is '+ data.dayOfTheWeek + '. The time is ' + data.currentDateTime
}

//getTimeWithAjax function is a lot longer
function getTimeWithAjax(){
  $.ajax(apiUrl, {
    method: 'GET'
  })
  .done(function(data){
    console.log('got data');
    console.log(data);
    $('#time-container').html(getTimeStringFromData(data));

  })

  .fail(function(){
    console.log('failure');

  })

  .always(function(){
    console.log('this always happens');
  });;

}
//getTimeUsingGet function is a lot shorter
function getTimeUsingGet(){
  $.get(apiUrl, function(data){
    $('#time-container').html(getTimeStringFromData(data));
  });
}

//both getTimeWithAjax and getTimeUsingGet will return the same data
