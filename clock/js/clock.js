/* Global vars */
var alarm;
var sound = new Audio("sound/alarm.mp3");

/** init function **/
function init(){
    createSelect();
    startTime();
    $('#selectHour').change(setAlarm);
    $('#selectMin').change(setAlarm);
    $(document).keypress(function (e){
        if (e.keyCode === 0 || e.keyCode === 32){
            e.preventDefault();
            toggleSelect();
        }
    });
}

/** Sets the alarm **/
function setAlarm(){
    var hour = $('#selectHour').val();
    var min = $('#selectMin').val();
    var meridiem = $('#meridiem').text();
    alarm = hour + ":" + min + " " + meridiem;
    console.log('Alarm set for ' + alarm);
}

/** Removes the alarm **/
function removeAlarm(){
    alarm = "";
    console.log("Alarm is not set");
}

/** Rings the alarm **/
function alarmRing(){
    sound.play();
}

/** Stops the alarm **/
function alarmStop(){
    sound.pause();
    sound.currentTime = 0;
    alarm = "";
    resetSelected();
}

function checkAlarm(now){
    if (now == alarm){
        alarmRing();
        return true;
    }else{
        return false;
    }
}

/** Starts the clock **/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var a = getMeridiem(h);
    h = formatTime(formatHour(h));
    m = formatTime(m);
    s = formatTime(s);
    var time = h + ":" + m + ":" + s + " " + a;
    var now = h + ":" + m + " " + a;
    var h1 = '<h1>' + time + '</h1>';
    $('#clock').text(time);
    checkAlarm(now);
    var t = setTimeout(startTime, 500);
}

/** Gets meridiem **/
function getMeridiem(h){
    if (h >= 12)
        return 'pm';
    else
        return 'am';
}
/** Formats hour **/
function formatHour(h){
    if (h > 12)
        return h - 12;
    else if (h == 0)
        return 12;
    else
        return h;
}
/** Formats single digits **/
function formatTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

/** Toggles the meridiem **/
function meridiem(){
    var curr = $('#meridiem');
    if (curr.text() == 'am'){
        curr.text('pm');
    }else{
        curr.text('am');
    }
    setAlarm();
}

/** Toggles the alarm **/
function toggleSelect(){
    if ($('#alarmButton').hasClass('visible')){
        $('#alarmButton').removeClass('visible').addClass('invisible'); 
        $('#selectAlarm').removeClass('invisible').addClass('visible');
        $('#offButton').removeClass('invisible').addClass('visible');
        setAlarm();
    }else{
        $('#alarmButton').removeClass('invisible').addClass('visible'); 
        $('#selectAlarm').removeClass('visible').addClass('invisible');
        $('#offButton').removeClass('visible').addClass('invisible');
        removeAlarm();
        alarmStop();
    }
    
}

/** resets the selection to 7:00am **/
function resetSelected(){
    $('#selectHour').children().removeAttr('selected');
    $('#selectMin').children().removeAttr('selected');
    $('#defaultHour').attr("selected", "selected");
    $('#meridiem').text('am');
}


/** Creates the drop-down selectors **/
function createSelect(){
    var selectHr = "";
    var selectMin = "";
    for (var h = 1; h < 13; h++){
        /* Just sets the default wake up time to 7:00am, looks better */
        if (h == 7)
            selectHr += '<option id="defaultHour" value="' + formatTime(h) + '" selected="selected">' + formatTime(h) + '</option>';
        else
            selectHr += '<option value="' + formatTime(h) + '">' + formatTime(h) + '</option>';
    }
    for (var m = 0; m < 60; m++){
        selectMin += '<option value="' + formatTime(m) + '">' + formatTime(m) + '</option>';
    }
    var div = '<div id="selectAlarm" class="invisible">';
    div += '<select id="selectHour">' + selectHr + '</select>';
    div += '<select id="selectMin">' + selectMin + '</select>';
    div += '<a id="meridiem" href="#" onclick="meridiem()">am</a>';
    div += '</div>';
    $('.container')
        .append('<a class="visible" id="alarmButton" href="#" onclick="toggleSelect()"><i class="glyphicon glyphicon-time"></i></a>')
        .append(div)
        .append('<a class="invisible" id="offButton" href="#" onclick="toggleSelect()"><i class="glyphicon glyphicon-off"></i></a>');
}

$(document).ready(init);