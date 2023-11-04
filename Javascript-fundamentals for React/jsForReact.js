//tannary operator
const person = {
    name: 'Sammy',
    age: 24,
    graduated: 'true',
};
 
const person2 = { ...person, name: 'gladys'}; //same object different properties less code

//example2 adding properties to arrays
 const names = ['Sammy', 'Doricas', 'Xaviuor'];
 const names2 = [...names, 'joy']

 //Three array functions .map() .filter() .reduce()
  let students = ['Sammy', 'Doricas', 'Xaviuor', 'Sammy', 'Sammy'];

  names.map((name) =>{
    return name + '1'; //concatenate each property with 1 
  });
  names.map((name) =>{
    return <h1> {name} </h1> //return html header with each element in the list
  });
  names.filter((name) => {
    return name !== 'sammy' //exclude sammy
  });

      // Anonymous function for reactjs
     //<button onClick={() => {
    //    console.log('this is important in reactJS');
   //   }}
  //></button>;
 
