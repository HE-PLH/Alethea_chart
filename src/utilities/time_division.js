import {globals} from "./globals"
const time_constants = {
    ms: 1,
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    w: 604800000,
    mo: 2592000000,
    y: 1000,
}


function exec(data, time){
    let record = {};
    record = sanitizeRecord(data[0]);
    
    let date = new Date(record.date), temp = 0, result = [];
    record.date = date;
    record.increase = record.close > record.open;
    for (let i = 1;i< data.length-1; i++){
        record = sanitizeRecord(data[i]);
        temp = new Date(record.date);
        if ((temp-date)>time) {
            record.date = temp;
            record.increase = record.close > record.open;
            result.push(record);
        }
        date = temp;
    }
}
function execAbsolute(data, day){
    let record = {};
    record = sanitizeRecord(data[0]);
    let date = new Date(record.date), temp = 0, result = [];
    record.date = date;
    record.increase = record.close > record.open;
    result.push(record)
    for (let i = 1;i< data.length-1; i++){
        record = sanitizeRecord(data[i]);
        temp = new Date(record.date);
        if (temp[`get${day}`]()!==date[`get${day}`]()) {
            record.date = temp;
            record.increase = record.close > record.open;
            result.push(record);
        }
        date = temp;
    }
    return result;
}


function execAbsoluteWeek(data){
    let record = {};
    record = sanitizeRecord(data[data.length-1]);
    let date = new Date(record.date), temp = 0, result = [], d = new Date();
    record.date = date;
    record.increase = record.close > record.open;
    temp = getLastSunday(record.date);
    result.push(record)
    for (let i = data.length-2;i>-1; i--){
        record = sanitizeRecord(data[i]);
        d = new Date(record.date);
        if(d>temp){
            
        }else{
            temp = getLastSunday(record.date);
            record.date = d;
            record.increase = record.close > record.open;
            result.unshift(record);
        }
        date = d;
    }
    return result;
}

function sanitizeRecord(record) {
    let r = {};
    for (let i in record){
        if (record.hasOwnProperty(i)) {
            r[i.toLowerCase()] = record[i];
        }
    }
    record = r;
    record.high = toNumber(record.high);
    record.open = toNumber(record.open);
    record.low = toNumber(record.low);
    record.close = toNumber(record.close);
    record.volume = toNumber(record.volume);
    return record;
}


function getLastSunday(date){
    let t = new Date(date);
    t.setDate(t.getDate()-t.getDay());
    return t;
}

function toNumber(n) {
    return parseFloat(n);
}
export function ExecuteChartTimeSplit(data, time){
    globals.virtual_data = [];
    switch(time){
        case "MS":
            return(execAbsolute(data, "MilliSeconds"));
            break;
        case "S":
            return(execAbsolute(data, "Seconds"));
            break;
        case "H":
            return(execAbsolute(data, "Hour"));
            break;
        case "D":
            return (execAbsolute(data, "Day"));
            break;
        case "W":
            return(execAbsoluteWeek(data, "Week"));
            break;
        case "M":
            return(execAbsolute(data, "Month"));
            break;
        case "Y":
            return(execAbsolute(data, "Year"));
            break;        
       default:
            let d = time.match(/.*[mshdwoy]*/gi);
            let op = ((/[mshdwoy]*/i).exec(d));
            // let r = d.split("")
    }
}