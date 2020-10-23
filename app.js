
function saveData(){
    var name=document.getElementById("name");
    var roll=document.getElementById("roll");

  
var key=firebase.database().ref('student').push().key
//  var key= "key" + Math.random() * 123456;
//  firebase.database().ref('student' + key.toFixed()).set(student);    //we can use child or / for nesting
// console.log(firebase.database)
//console.log(student)

var student={
  name:name.value,
  roll:roll.value,
  key:key
}


firebase.database().ref('student/' + key).set(student) //push randomly generate key
}


// To get dat from firebase
// function getFirebaseData(){
//   firebase.database().ref('student').once('value',function(data){         // once() if we want data when we refresh the page
//     console.log(data.val());

//   })
// }


// function getFirebaseData(){
//   firebase.database().ref('student').on('child_added',function(data){     //on() work on real time whenever there is change om firebase it will bring the data
//     console.log(data.val());

//   })
// }

// getFirebaseData();

// function removeFirebaseData(){
//   firebase.database().ref('student/-MKLOfD4PSlLGXXxotys').remove();
// }

// removeFirebaseData();


 function editFirebaseData(){
   firebase.database().ref('student/-MKLIcObRrhSNmkDo0bE').set({
     key:'-MKLIcObRrhSNmkDo0bE',
     name:'Mustafa',
   })
 }

 editFirebaseData();
