interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacher {
  (firstName: String, lastName: String): String
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const printTeacherFunction: PrintTeacher (firstName: String, lastName: String) =>{
  console.log(`${firstName.charAt(0)}. ${lastName}`)
} 

console.log(director1);

// interface IStudentInterface<T> {
//   constructor(firstName: T, lastName:T) {
//   }
//   workOnHomework(): String;
//   displayName(): T
// }

// // class StudentInterface<T> implements IStudentInterface<T>{
// //   constructor(firstName: String, lastName: String){

// //   }
// //   workOnHomework(): T;
// //   displayName(): T
// // }

// class StudentClass implements IStudentInterface {
//   // constructor(firstName: String, lastName:String) {
//   //   this.firstName = firstName
//   //   this.lastName = lastName
//   // }

//   workOnHomework() {
//     return "Currently working";
//   }

//   displayName() {
//     return this.firstName;
//   }
// }


