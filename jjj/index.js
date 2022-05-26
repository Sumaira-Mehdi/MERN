class User {
    constructor(name, age,password) {
      this.name = name;
      this.age = age;
      this.password = password;
    }
    check(){
        
       if (this.password < 6){
       throw new Error("password should be less than 6 characters");
       }
    }

}
class admin extends User {
    check(){
    super.check();
   
}
}

let user1 = new admin("ali",33,"sana")
let admin1 = new admin("hassan",43,"king")

console.log(admin1.check());