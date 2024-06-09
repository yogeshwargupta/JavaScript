const course ={
    courseName: "Nmaste JS",
    price: "99",
    courseInstructor: "Hitesh"
}

//course.courseInstructor   

const {courseInstructor: instructor} = course  //destructuring
console.log((instructor));


//Destructuring in React
// const navbar = ({company}) => {

// }

// navbar(company="Yogesh")

//API
//1. in object format
// {
//     courseName: "Nmaste JS",
//     price: "99",
//     courseInstructor: "Hitesh"  
// }

//2. in Array format
[
    {},
    {},
    {}
]