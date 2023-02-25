// let Hello = function(str) {
//     this.str = str;
// };

// Hello.prototype.f1 =  function() {
//     let a = this.str.split(" ");
//     let b = [];
//     for(let i in a) {
//         b.push(a[i][0].toUpperCase());
//     }
//     for(let j = 0; j < a.length; j++) {
//         for(let k = 1; k < a[j].length; k++) {
//             b[j] += a[j][k];
//         }
//     }
//     this.str = b.join(" ");
// };

// let string = new Hello('Akjfk kjkdj Jkk jKkK jN');
// let string2 = new Hello("hello. How are you? i'm fine.");
// console.log(string);
// console.log(string2);
// string.f1();
// string2.f1();
// console.log(string);
// console.log(string2);




// let a = ['adsd','basd','Csd', 'qads', 'Ls'];
// let b = [];
// for(let i in a) {
//     b.push(a[i][0].toUpperCase());
// }
// for(let j = 0; j < a.length; j++) {
//     for(let k = 1; k < a[j].length; k++) {
//         b[j] += a[j][k];
//     }
// }
// console.log(b.join(" "));



  


/* function isBracketsOk(str) {
    let stack = [];
    const OPEN_BRACKETS = ['(', '{'];
    const BRACKETS_PAIR = {
        [')']: '(',
        ['}']: '{',
    };

    for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
    } else {
        if (stack.length === 0) {
        return false;
        }

        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
        } else {
        return false;
        }
    }
    }

    return stack.length === 0;
}


let test = '(((())))';
console.log(isBracketsOk(test)); */

/* let a = 1101;
while(a) {
    console.log(a % 10);
    a = Math.floor(a / 10 );
    
    
} */


/* let b = 279;
let a = '';
let ar = [];
let c = 0;
let bit = b.toString(2);

while(b) {
    
    if(b % 2 == 1) {
        c++;
    }
    a += b % 2;
    b = Math.floor(b / 2);
}
ar = a.split('');

for(let i = 0; i < ar.length / 2; i++) {
    [ar[i], ar[ar.length - i - 1]] = [ar[ar.length - i - 1], ar[i]];
}

console.log(ar.join(''));
// console.log(c);
console.log(bit);
// console.log(typeof bit); */



/* let matrix = [
    [1,2,3,4],
    [5,5,3,0],
    [0,2,1,9],
    [6,8,5,4],
    [10,8,-1,0]
];
let row;

for(let i = 0; i < matrix.length; i++) {
    let row = [];
    for(let j = 0; j <= i; j++) {
        row.push(matrix[i][j]);
    }
    console.log(row.join(' '));
}
 */


/* function rgb(r, g, b){
    let hex = '';
    if( r > 255) {
        r = 255;
    } 
    if(g > 255) {
        g = 255;
    } 
    if(b > 255) {
        b = 255;
    }
    if(r < 0) {
        r = 0;
    }
    if(g < 0) {
        g = 0;
    }
    if(b < 0) {
        b = 0;
    }
    hex += ("0"+(Number(r).toString(16))).slice(-2).toUpperCase();
    hex += ("0"+(Number(g).toString(16))).slice(-2).toUpperCase();
    hex += ("0"+(Number(b).toString(16))).slice(-2).toUpperCase();
    return hex.toUpperCase();
    // complete this function  
} */



/* function encode(input) {
    let stack = [];
    let stack2 = [];
    let c = 0;
    let b = 0;
    for(let i = 1; i <= input.length; i++) {
        let currentSymbol = input[c];

        if(currentSymbol == input[i]) {
            stack.push(currentSymbol);
            c++;
        }
         else {
            stack2[b] = [stack.length + 1, currentSymbol];
            stack.splice(0);
            b++;
            c++;
        }
    }
    return stack2;
   
    
  
}

console.log(encode('RRRKKKKLLLIIHHNNNEEEEAAAAAWWDKKUUNNP')); */

/* function doubles(maxk, maxn) {
    let s = 0;
    for(let i = 1; i <= maxk; i++) {
        for(let j = 1; j <= maxn; j++) {
            
            s +=  (1 / (i * (j + 1)**(2* i)));
               
        }
    }
    return s ;
}

console.log(doubles(10, 100)); */

/* function double(maxk, maxn) {
    let s = 0;
    let i = 1;
    for(let k = 1; k <= maxn; k++) {
        s += (1 / (i * (k + 1) ** (2 * i)));
        if(k == maxn) {
            k = 0;
            i++;
        }
        if(i > maxk) {
            break;
        }
    }
    return s;
}

console.log(double(10, 1000)); */


/* const lines = 5;
let result = '';
let a = 1;
let b = 5;

for(let i = 0; i <= lines; i++) {
    for(let k = 0; k < b; k++) {
        result += ' ';
    }
    b--;
    for(let j = 1; j <= a; j++) {
        result += '*';
    }
    
    a += 2;
    result += '\n';
}

console.log(result);
 */

/* function getMathResult(a, b) {
    let result = '';
    if(typeof b != 'number' || b <= 0) {
        return a;
    }
    for(let i = 1; i <= b; i++) {
        if(i == b) {
            result +=  `${a * i}`;
        } else {
            result +=  `${a * i}---`;
        }
    }
    return result;
}

console.log(getMathResult(3, 10));
 */

/* let n = 500;
let a = 0;

for(let i = 0; i < n; i++) {
    for(let k = 2; k < i; k++) {
        if(i % k == 0) {
            break;
        } else {
            a++;
        }
    }
    if(a == i - 2) {
        console.log(i);
    }
    a = 0;
}
 */

/* function getCoupeNumber(a) {
    if(typeof a !== 'number' || a < 0 || a % 1 !== 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if(a == 0 || a > 36) {
        return 'Таких мест в вагоне не существует';
    } else if (a % 4 == 1) {
        return Math.round(a / 4) + 1;
    }
    return Math.round(a / 4);
}

console.log(getCoupeNumber(37)); */



/* function getTimeFromMinutes(n) {
    let hours = n / 60;
    let minutes = 60 * ((hours * 100) % 100) / 100;
    hours = Math.floor(hours);
    minutes = Math.floor(minutes);
    if(n < 0 || n % 1 !== 0) {
        return 'Ошибка, проверьте данные';   
    } else if(hours == 1) {
        return `Это ${hours} час и ${minutes} минут`;
    } else if( hours > 1 && hours < 5) {
        return `Это ${hours} часа и ${minutes} минут`;
    } else {
        return `Это ${hours} часов и ${minutes} минут`;
    }
    
    
}

console.log(getTimeFromMinutes(-140)); */


/* function findMaxNumber(a, b, c, d) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number'){
    return 0;
  }
  return Math.max(a, b, c, d);
}

console.log(findMaxNumber(1, '5', 6.6, 11)); */

/* function fib(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    let result = '';
    if(typeof n !== 'number' || n === 0 || n % 1 !== 0) {
        return '';
    }
     for(let i = 0; i < n; i++) {
        if(c == n) {
            result = result.slice(0, -1);
            return result;
        }
        if(c % n == n - 1) {
            result += a;
            return result;
        }
        result += a + ' ';
        result += b + ' ';
        a = a + b;
        b = b + a;
        c += 2;
        
    }
    
}

console.log(fib(7));
 */

/* function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    let result = [];
    if(typeof n !== 'number' || n === 0 || n % 1 !== 0 || n < 0) {
        return [];
    }
     for(let i = 0; i < n; i++) {
        if(c == n) {
            return result;
        }
        if(c % n == n - 1) {
            result.push(a);
            return result;
        }
        result.push(a);
        result.push(b);
        a = a + b;
        b = b + a;
        c += 2;
        
    }
    
} */



/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            python: '5%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {age} = plan;
        let lang = plan.skills.languages.join(' ').toUpperCase();

        return `Мне ${age} и я владею языками: ${lang}`;
        
    }
};

const personal = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            python: '5%'
        },
        exp: '1 month'
    }
};


function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let str = '';
    if(Object.keys(plan.skills.programmingLangs).length === 0) {
        return str;
    }
    for(let i in plan.skills.programmingLangs) {
        str += `Язык ${i} изучен на ${plan.skills.programmingLangs[i]} \n`;
    }
    return str;
}



console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); */



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

/* function showFamily(arr) {
    if(arr.length === 0) {
        return 'Семья пуста';
    } else {
        return `Семья состоит из: ${arr.join(' ')}`
    }
    
}

console.log(showFamily(family)); */


/* function standardizeStrings(arr) {
    arr.forEach(element => {
       console.log(element.toLowerCase()); 
    });  
}

standardizeStrings(family); */

/* const someString = 'This is some strange string';

function reverse(str) {
    let strRes = '';
    if(typeof str !== 'string') {
        return 0;
    }
    for(let i = str.length - 1; i >= 0; i--) {
        strRes += str[i];
    }
    return strRes;

}

function reverseTwo(str) {
    let strRes = str.split('');
    strRes.reverse();
    return strRes.join('');
}

console.log(reverseTwo(someString)); */

/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = 'Доступные валюты:\n';

    if(arr.length === 0) return 'Нет доступных валют';
    let ar = arr.filter( item => item !== missingCurr);

    ar.forEach(element => {
        result += `${element}\n`;
    });
    return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies],'CNY')); */



/* const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let width = 0;
    let length = 0;
    let sumArea = 0;

    data.shops.forEach(element => {
        width = element.width;
        length = element.length;

        sumArea += width * length;
    });

    if(sumArea * data.height * data.moneyPer1m3 > data.budget) {
        return 'Бюджета недостаточно';
    }
    return 'Бюджета достаточно';
    
}

console.log(isBudgetEnough(shoppingMallData));
 */



/* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr = arr.sort();
    let array = [];
    let ar = [];

    arr.forEach(element => {
        ar.push(element);
        if(ar.length === 3) {
            array.push(ar);
            ar = [];
        } 
    });

    if(ar.length == 2) {
        array.push(`Оставшиеся студенты: ${ar[0]}, ${ar[1]}`);
    } else if(ar.length == 1) {
        array.push(`Оставшиеся студенты: ${ar[0]}`);
    } else {
        array.push(`Оставшиеся студенты: -`);
    }

    return array;
}

console.log(sortStudentsByGroups(students)); */



/* const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '4$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = Object.assign([], data.waitors);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData); */

function factorial(n) {
    if(typeof n === 'string' || n % 1 !== 0) {
        return 'Неверное значение';
    } else if(n <= 0) {
        return 0;
    } else if(n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4.123));
console.log(4.23 % 1);








