function plugin_is_running() {
    //console.log("button name "+document.getElementById('buttonstatus').name)
    //console.log("button type "+document.getElementById('buttonstatus').type)
    //console.log("button value "+document.getElementById('buttonstatus').value)
    //console.log("button innerHTML "+document.getElementById('buttonstatus').innerHTML)
    //console.log("button title "+document.getElementById('buttonstatus').title)
    //console.log("button style "+document.getElementById('buttonstatus').style)
    //console.log("button className "+document.getElementById('buttonstatus').className)
    if (document.getElementById('buttonstatus').className == "button icon16-status-active") {
        return false
    }
    return true
}

function check_job_name(name) {
    if ((name == null) || (name == "")) {
        return false;
    }
    var bad_chars = " !:;,?./§ù%*µ$£+)°àç_è-('é&<>œ€}]@^\[{#~";
    for (var i = 0; i < name.length; i++) {
        if ( bad_chars.indexOf(name.charAt(i)) != -1 ) {
            return false;
        }
    }
    return true
}

function check_days_of_week(dow) {
    var temp = dow;
    temp = temp.replace(/Mo/,'');
    temp = temp.replace(/Tu/,'');
    temp = temp.replace(/We/,'');
    temp = temp.replace(/Th/,'');
    temp = temp.replace(/Fr/,'');
    temp = temp.replace(/Sa/,'');
    temp = temp.replace(/Su/,'');
    if ( temp.length == 0 ) {
        return true;
    }
    return false;
}

function check_dow_overlapped(dow1,dow2) {
    var temp1 = dow1;
    var temp2 = dow2;
    while ( temp1.length != 0) {
        var old_temp1 = temp1
        temp1 = temp1.replace(/Mo/g,'');
        var old_temp2 = temp2
        temp2 = temp2.replace(/Mo/g,'');
        if ((temp1 != old_temp1) && (temp2 != old_temp2)) {
            return false
        }
        old_temp1 = temp1
        temp1 = temp1.replace(/Tu/g,'');
        old_temp2 = temp2
        temp2 = temp2.replace(/Tu/g,'');
        if ((temp1 != old_temp1) && (temp2!= old_temp2)) {
            return false
        }

        old_temp1 = temp1
        temp1 = temp1.replace(/We/g,'');
        old_temp2 = temp2
        temp2 = temp2.replace(/We/g,'');
        if ((temp1 != old_temp1) && (temp2!= old_temp2)) {
            return false
        }

        old_temp1 = temp1
        temp1 = temp1.replace(/Th/g,'');
        old_temp2 = temp2
        temp2 = temp2.replace(/Th/g,'');
        if ((temp1 != old_temp1) && (temp2!= old_temp2)) {
            return false
        }

        old_temp1 = temp1
        temp1 = temp1.replace(/Fr/g,'');
        old_temp2 = temp2
        temp2 = temp2.replace(/Fr/g,'');
        if ((temp1 != old_temp1) && (temp2!= old_temp2)) {
            return false
        }

        old_temp1 = temp1
        temp1 = temp1.replace(/Sa/g,'');
        old_temp2 = temp2
        temp2 = temp2.replace(/Sa/g,'');
        if ((temp1 != old_temp1) && (temp2!= old_temp2)) {
            return false
        }

        old_temp1 = temp1
        temp1 = temp1.replace(/Su/g,'');
        old_temp2 = temp2
        temp2 = temp2.replace(/Su/g,'');
        if ((temp1 != old_temp1) && (temp2!= old_temp2)) {
            return false
        }

    }
    return true;
}

function check_number(num) {
    var temp = num;
    temp = temp.replace(/0/g,'');
    temp = temp.replace(/1/g,'');
    temp = temp.replace(/2/g,'');
    temp = temp.replace(/3/g,'');
    temp = temp.replace(/4/g,'');
    temp = temp.replace(/5/g,'');
    temp = temp.replace(/6/g,'');
    temp = temp.replace(/7/g,'');
    temp = temp.replace(/8/g,'');
    temp = temp.replace(/9/g,'');
    if ( temp.length == 0 ) {
        return true;
    }
    return false;
}

function check_dim_levels(levels) {
    return true;
}

function check_time(hour) {
    var temp = hour.split(':');
    //console.log("convert "+temp[0]+" "+temp[1])
    if ((temp[0] == null) || (temp[0].length>2) || (temp[1] == null) || (temp[1].length>2)) {
        return false;
    }
    var hh = parseInt(temp[0],10);
    //console.log("convert "+hh)
    if ((check_number(temp[0]) != true) || (hh <0) || (hh>23)) {
        return false;
    }
    var mm = parseInt(temp[1],10);
    //console.log("convert "+mm)
    if ((check_number(temp[1]) != true) || (mm <0) || (mm>59)) {
        return false;
    }
    //console.log("return true")
    return true
}

function check_xpldate(date) {
    var year = parseInt(date.substring(0,4),10);
    var month = parseInt(date.substring(4,6),10);
    var day = parseInt(date.substring(6,8),10);
    var hour = parseInt(date.substring(8,10),10);
    var minute = parseInt(date.substring(10,12),10);
    var second = parseInt(date.substring(12),10);
    var ok = false
    try {
        var date = new Date();
        //console.log("year "+year);
        //console.log("month "+month);
        //console.log("day "+day);
        date.setFullYear(year);
        date.setMonth(month-1);
        date.setDate(day);
        date.setHours(hour);
        date.setMinutes(minute);
        date.setSeconds(second);
        if (date.getFullYear() != year) {
            //console.log("bad year "+date.getFullYear());
            return false;
        }
        if (1 + date.getMonth() != month) {
            //console.log("bad month "+date.getMonth()+1);
            return false;
        }
        if (date.getDate() != day) {
            //console.log("bad day "+date.getDate());
            return false;
        }
        if (date.getHours() != hour) {
            //console.log("bad hour "+date.getHours());
            return false;
        }
        if (date.getMinutes() != minute) {
            //console.log("bad minutes "+date.getMinutes());
            return false;
        }
        if (date.getSeconds() != second) {
            //console.log("bad seconds "+date.getSeconds());
            return false;
        }
        //console.log("true ");
        return true;
    } catch (e) {
        return false;
    }
return true;
}

function check_year(year) {
    var myear = parseInt(year, 10);
    try {
        var date = new Date();
        //console.log("year "+year);
        date.setFullYear(myear);
        if (date.getFullYear() != myear) {
            //console.log("bad year "+date.getFullYear());
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
return true;
}

function check_month(year,month) {
    var myear = parseInt(year, 10);
    var mmonth = parseInt(month,10);
    var ok = false
    try {
        var date = new Date();
        //console.log("year "+year);
        //console.log("month "+month);
        date.setFullYear(myear);
        date.setMonth(mmonth-1);
        if (date.getFullYear() != myear) {
            //console.log("bad year "+date.getFullYear());
            return false;
        }
        if (1 + date.getMonth() != mmonth) {
            //console.log("bad month "+date.getMonth()+1);
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
return true;
}

function check_day(year,month,day) {
    var myear = parseInt(year, 10);
    var mmonth = parseInt(month,10);
    var mday = parseInt(day,10);
    var ok = false
    try {
        var date = new Date();
        //console.log("year "+year);
        //console.log("month "+month);
        //console.log("day "+day);
        date.setFullYear(myear);
        date.setMonth(mmonth-1);
        date.setDate(mday);
        if (date.getFullYear() != myear) {
            //console.log("bad year "+date.getFullYear());
            return false;
        }
        if (1 + date.getMonth() != mmonth) {
            //console.log("bad month "+date.getMonth()+1);
            return false;
        }
        if (date.getDate() != mday) {
            //console.log("bad day "+date.getDate());
            return false;
        }
        //console.log("true ");
        return true;
    } catch (e) {
        return false;
    }
return true;
}

function check_hour(hour) {
    var mhour = parseInt(hour,10);
    var ok = false
    try {
        var date = new Date();
        date.setHours(mhour);
        if (date.getHours() != mhour) {
            //console.log("bad hour "+date.getHours());
            return false;
        }
        //console.log("true ");
        return true;
    } catch (e) {
        return false;
    }
return true;
}

function check_minute(minute) {
    var mminute = parseInt(minute,10);
    var ok = false
    try {
        var date = new Date();
        date.setMinutes(mminute);
        if (date.getMinutes() != mminute) {
            //console.log("bad minutes "+date.getMinutes());
            return false;
        }
        //console.log("true ");
        return true;
    } catch (e) {
        return false;
    }
return true;
}

function check_second(second) {
    var msecond = parseInt(second,10);
    var ok = false
    try {
        var date = new Date();
        date.setSeconds(msecond);
        if (date.getSeconds() != msecond) {
            //console.log("bad seconds "+date.getSeconds());
            return false;
        }
        //console.log("true ");
        return true;
    } catch (e) {
        return false;
    }
return true;
}
