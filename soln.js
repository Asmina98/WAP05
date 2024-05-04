console.log(sum([1, 20, 30, 15, 25]));
console.log(getNewArray(['asmina', 'arkan', 'able', 'apple', 'hia']));
console.log(myFunction("hi", [1, 2, 3], ["Hello", "world"]));

function sum(arr) {
    return arr.filter(elem => elem > 20).reduce((accu, current) => accu + current, 0);
}

//2
const getNewArray = function(arr) {
    // return arr.filter(elem => elem.includes('a') && elem.length >= 5);
    return arr.filter(elem => elem.includes('a')).filter(elem => elem.length >= 5);
}


//3
let myFunction = function() {
    return [].concat.apply([], arguments);
};
//4
const nameAndAverage = students.reduce((accu, obj) => {
    if (obj.courses.includes("cs303")) {
      const sum = obj.grades.reduce((accu, grade) => accu + grade, 0);
      const average = sum / obj.grades.length;
      accu[obj.name] = average;
    }
    return accu;
  }, {});
  
  console.log(nameAndAverage);


