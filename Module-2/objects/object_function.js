const student= {
    fname: "sahail",
    lname: "dutta",
    age: 19,
    fullname: function()
    {
        console.log("Student full name is:", this.fname +" "+
        this.lname);
        console.log(`Student first name is ${this.fname} 
        last name is: ${this.lname} and he is 
        ${this.age}years old`);

    }
};
student.fullname()