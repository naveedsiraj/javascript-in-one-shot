console.log('-------------- timeanddare  ----------------')
  // in js their is a method throgh which nwe deal with date and time called Date ()
  //  date is an object in js

  const date = new Date();   // here throgh the new keyword we crete the object of date and its show current date and time
  console.log(typeof date)

  // there are different type of formatting the date object

    // tostring formating

    console.log(`date to tostring : ${date.toString()}`)
   // result date to toString : Mon Nov 27 2023 14:24:27 GMT+0500 (Pakistan Standard Time)

    //  tolocate string formating

    console.log(`date to toLocaleString: ${date.toLocaleString()}`)
    // result   date to tolocalestring: 11/27/2023, 2:25:09 PM

    // todatestring formatting its  show only date

    console.log(`date to toDateString: ${date.toDateString()}`)
    // result  date to toDateString: Mon Nov 27 2023

    // tolocaledatestring formating

    console.log(`date to toLocaleDateString: ${date.toLocaleDateString()}`)
    // result   date to toLocaleDateString: 11/27/2023

    // totimestring its show only time

    console.log(`time to toTimeString: ${date.toTimeString()}`)
    // result   time to toTimeString: 14:30:34 GMT+0500 (Pakistan Standard Time)

    // tolocaletimestring its fomating the time

    console.log(`time to toLocaleTimeString   ${date.toLocaleTimeString()}`)
    // result  time to toLocaleTimeString   2:31:59 PM


    //  note in date the month start from zero

    let day = new Date();
    day = day.getDate();

    let month = new Date();
    month = month.getMonth();

    let year = new Date();
    year = year.getFullYear();

    console.log( `day:${day} month:${month} year:${year}`);
