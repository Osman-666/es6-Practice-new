class parent{
    constructor(){
        this.fatherName = 'schwerznegger';
    }
}
class Child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby1 = new Child('arnold');
const baby2 = new Child('tom');
console.log(baby1.getFullName());
console.log(baby2.getFullName());