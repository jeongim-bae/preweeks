var shopper = {
    firstName : 'Erin',
    lastName : 'Lee',
    id : 12345,
    cartExist :true,
    fullName : function() {
        return this.firstName + " " + this.lastName;
      },
    grocerCart :['orange', 'apple', 'onion', 'poptato', 'meat']
}

console.log(shopper);
console.log(shopper.fullName());
