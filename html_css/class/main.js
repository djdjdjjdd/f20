// bai toan
const toan = {
    userName: 'Toan',
    address: 'HN',
    age: 27,
    getInfo: function () {

    }
}
// class
// class la 1 template của các object có chung properties và method
// dễ dàng trong viejejc quản lí tái sử dụng mở rộng sự án
// 1 class có thể kế thừa 1 class khác : properties và method
// 1 class có thể có các static properties và method của class đó
// static la 1 property
class Person {
    constructor(userName, address, age) {
        this.userName = userName;
        this.address = address;
        this.age = age;

    }
    getInfo() {
        return `userName:${this.userName}, address: ${this.address}, age:${this.age}`;
    }
}
class Male {
    constructor(userName, address, age) {
        this.userName = userName;
        this.address = address;
        this.age = age;
        this.gender = 'male';
    }
    getInfo() {
        return `userName:${this.userName}, address: ${this.address}, age:${this.age}`;
    }
    getGender() {
        return this.gender;
    }
}
class Male extends Person {
    constructor(userName, address, age) {
        super(userName, address, age);
        this, gender = gender;
    }
    getInfo(){
        return `userName:${this.userName}, address: ${this.address}, age:${this.age}`;
    }
    getGender(){
        return gender;
    }
}

const toan3 = new Person('Toan3', 'HN3', 29);
const toan4 = new Person('Toan3', 'HN3', 29);
console.log(toan3, toan3.getInfo())