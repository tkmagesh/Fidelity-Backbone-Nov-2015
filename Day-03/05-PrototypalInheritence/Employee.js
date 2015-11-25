function Employee(id, name, salary){
    //this.id = id;
    this._id = id;
    this.name = name;
    this.salary = salary;
}
Employee.prototype.getId = function(){
    return this._id;
}

var e = new Employee(100,"Magesh", 10000);
e.getId();

