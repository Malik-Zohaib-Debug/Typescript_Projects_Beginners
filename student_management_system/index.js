class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
// create class student extende with person
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    RegisterForCourses(course) {
        this.courses.push(course);
    }
}
// create class instructor extende with person
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    ;
    assignCourse(course) {
        this.courses.push(course);
    }
}
// create class course
class Course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
    addStudent(student) {
        this.students.push(student);
        student.RegisterForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor.push(instructor);
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    cources = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.cources.push(course);
    }
}
// student create
const student1 = new Student("zohaib", 22, "st1");
const student2 = new Student("faizan", 21, "st2");
// instructor create
const instructor1 = new Instructor("zia", 26, 25000);
const instructor2 = new Instructor("daniyal", 26, 25000);
//courses create
const course1 = new Course("C1", "Metaverse");
const course2 = new Course("C2", "blockChain");
// add student & instructor in course1
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
// add student & instructor in course
course2.addStudent(student1);
course2.addStudent(student2);
course2.setInstructor(instructor2);
const department1 = new Department("computer science");
department1.addCourse(course1);
department1.addCourse(course2);
console.log("student 1 data:");
console.log(student1);
export {};
