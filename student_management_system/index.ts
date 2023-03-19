class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name
    }
}

// create class student extende with person
class Student extends Person {
    rollNumber: string;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNumber: string) {
        super(name, age)
        this.rollNumber = rollNumber
    }
    RegisterForCourses(course: Course) {
        this.courses.push(course);
    }
}


// create class instructor extende with person

class Instructor extends Person {
 private   salary: number;
    courses: Course[] = [];


    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    };

    assignCourse(course: Course) {
        this.courses.push(course)
    }
}


// create class course
class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor: Instructor[] = [];
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name
    };

    addStudent(student: Student) {
        this.students.push(student);
        student.RegisterForCourses(this);
    }

    setInstructor(instructor: Instructor) {
        this.instructor.push(instructor);
        instructor.assignCourse(this)


    }
}


class Department {
    name: string;
    cources: Course[] = [];


    constructor(name: string,) {
        this.name = name;
    }
    addCourse(course: Course) {
        this.cources.push(course)
    }
}


// student create
const student1 = new Student("zohaib", 22, "st1");
const student2 = new Student("faizan", 21, "st2")


// instructor create
const instructor1 = new Instructor("zia", 26, 25000);
const instructor2 = new Instructor("daniyal", 26, 25000);

//courses create
const course1 = new Course("C1", "Metaverse",)
const course2 = new Course("C2", "blockChain",)


// add student & instructor in course1
course1.addStudent(student1)
course1.addStudent(student2)
course1.setInstructor(instructor1)


// add student & instructor in course
course2.addStudent(student1);
course2.addStudent(student2);
course2.setInstructor(instructor2)


const department1 = new Department("computer science");
department1.addCourse(course1);
department1.addCourse(course2);

console.log("student 1 data:");
console.log(student1);