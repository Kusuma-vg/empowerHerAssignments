if (true) {
    let x = 10;
    var y = 20;
  }
  console.log(y); //20
  console.log(x); //ReferenceError
//var is global scoped
//let is function scoped
  
const profile = {
    user: {
      details: {
        email: "test@mail.com"
      }
    }
  };

console.log(profile?.user?.details?.email) //test@mail.com
console.log(profile?.user?.details?.phone) //undefined

const student = {
    name: "Kusuma"
  };
  
  console.log(student?.address?.city); 