
/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log

    let a = arr.map((value,index,)=>{
           if(value.profession==="developer"){
            console.log(value)
            return value;
           }
    })


  }
 PrintDeveloperbyMap()



  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
   let a = arr.forEach((value,index,)=>{
           if(value.profession==="developer"){
            console.log(value)
            return value;
           }
    })


  }
  PrintDeveloperbyForEach()





  
  function addData() {
    //Write your code here, just console.log
    let newData = { id: 4, name: "jane", age: "22", profession: "developer" };
    arr.push(newData);
    console.log(arr);
  
  }

  addData()
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter((person) => person.profession !== "admin");
  console.log(arr);

  }

  removeAdmin()
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [{ id: 5, name: "bob", age: "25", profession: "developer" }];
    arr = arr.concat(newArr);
    console.log(arr);
  
  }

  concatenateArray()