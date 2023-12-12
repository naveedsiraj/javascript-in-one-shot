console.log('--------------this keywords  ----------------')
// here we talk about this keywords in details
// this keywords in js is buildin functyionality da bydefault object we
// note the this key word not working in arrow function

// but this keyword work in  arrrow function when  nested function the parent is normal then inside arraow function work
//  its use different in two places
// 1- globally
// 2- scope

// when we used globally this keyword its target the window object

// when we used inside scope its target the data of scope like function data

// example on global scope  and this result will show in web browaser

console.log("display windows object usinbg 'this' kwyword :", this)

// the above example console this kwyword its display all the window object

// example of declearing the varible inside scope which target the scope data only



  function percentage_of_student (studentrecord) {
    const total = 500;
    const studenttotalmarks = studentrecord.obtained_marks();
    const percentage_of_student = (studenttotalmarks / total) * 100;

    console.log(`Total Marks: ${studenttotalmarks}`);
    console.log(`Percentage: ${percentage_of_student}%`);

  }
  const student_record = {
    English : 100,
    Urdu : 100,
    Islamyat : 90,
    pakstudy : 90,
    maths : 100,

    obtained_marks: function(){
        console.log('English marks',this.English)
        console.log('Urdu marks',this.Urdu)
        console.log('Islamyat marks',this.Islamyat)
        console.log('pakstudy marks',this.pakstudy)
        console.log('maths marks',this.maths)

        let student_obtained_marks = this.English+this.Urdu+this.Islamyat+this.pakstudy+this.maths;
        return student_obtained_marks;
    }
  }

  percentage_of_student(student_record);







