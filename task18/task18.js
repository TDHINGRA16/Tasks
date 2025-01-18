// question1

// const numbers= [1,2,3,4,5];
// const squaredNumbers= numbers.map(number=>number**2);
// console.log(squaredNumbers);


// question2

// function getGrade(score){
//     return score>=90? A:
//     score>=80? B:
//     score>=70? C:
//     score>=60? D:F;
// }


// question3

// const car={
//     companyName: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// function changeYear(carObject,newYear){
//     carObject.year=newYear;
// }
// const {model,year}= car;
// console.log(`Model: ${model}, Year: ${year}`);


// question4

// function isPrime(num) {
//     if (num<=1) reutrn false;
//     for (i=2; i<=Math.sqrt(num);i++) {
//         if (num%i===0) return false;
//     }
//     return true;
// }
// const numbers= [1,2,3,4,5,6,7,8,9,10];
// const primeNumbers= numbers.filter(isPrime);
// console.log(primeNumbers);


//question5

// const numbers= [1,2,3,4,5];
// const square= numbers.map(num=>num**2);

// const numbers= [1,2,3,4,5,6,7,8,9]
// const evenNumbers= numbers.filter(num=> num%2===0);

// const numbers=[1,2,3,4,5,6];
// const sum= numbers.reduce((total,num)=> total=num,0);


//question6

// async function fetchData() {
//     try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/posts');
   
//     if (!response.ok){
//         throw new Error('Network was not ok');
//     }

//     const data= await reponse.json();

//     console.log(data);
//     } catch {
//         console.error('Error fetching data:',error);
//     }
// }

// fetchData();


//question7

// const person = {
//     name: 'John Doe',
//     address: {
//         street: '123 main st',
//         city: 'new york',
//         zip:'10001'
//     },
//     contact: {
//         email: 'john.doe@example.com',
//         phone: '123-456-7890'
//     }
// };

// const phoneNumber= person.contact?.phone;

// console.log(phoneNumber);
