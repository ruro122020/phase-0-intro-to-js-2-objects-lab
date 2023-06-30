// Write your solution in this file!
const employee = {
  name: null,
  streetAddress: null
};

function updateEmployeeWithKeyAndValue(employee, key, value){
  //should not mutate the employee object
  //it should return a new object that has an updated value for the key passed in. Use spread operator.
  const newObj = {...employee};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  //this function whould work the same as updateEmployeeWithKeyAndValue but it should mutate the employee object passed in.
   employee[key]=value
   return employee
}

function deleteFromEmployeeByKey(employee, key){
  //This function should delete the property with that key from the value pair. Use spread operator
  const newObj = {...employee};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
  //this function should work the same as deleteFromEmployeeByKey function but it should mutate the employee object
  delete employee[key];
  return employee;
}