// 1. Write a function called isOdd that receives 1 parameter:

function isOdd(num)  {
    return new Promise((resolve, reject) => {
        if (num % 2 !== 0) {
            resolve(true);
        } 
        
        else {
            reject(false);
        }
    });
};


const numbers = [1, 2, 3, 4, 5];

checkOddNumbers = async () => {
    for (let i = 0; i < numbers.length; i++) {
        try {
            const result = await isOdd(numbers[i]);

            console.log(`${numbers[i]} is Odd: ${result}`);
        } 

        catch (error) {              
        }
    }
};

checkOddNumbers();


// 2. Write an asynchronous function - resolve


function getRandomCharacter() {           
    return new Promise((resolve) => {
        setTimeout(() => {              
        const chars = "abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const index = Math.floor(Math.random() * chars.length);
        const randomCharacter = chars.charAt(index);
        resolve(randomCharacter);
        }, 500);
    });
};

async function getRandomCharacterAsync() {
    const randomCharacter = await getRandomCharacter();
    
    console.log(`The random character is: ${randomCharacter}`);
}

getRandomCharacterAsync();


// 3. Write an asynchronous function  - reject
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error value");
        }, 500);
    });
}

async function handleData() {
    try {
        const data = await getData();

        console.log("The random value is:", data);
    }
    catch (error) {
        console.log("Promise rejected with value:", error);
    }
}

handleData();

// 4. Write an asynchronous function  - reject + resolve
function rejectResolve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error value");
        }, 500);

        setTimeout(() => {
            resolve("Successful data retrieved");
        }, 500);
    });
}

async function handleRejectResolve() {
    try {
        const value = await rejectResolve();
        
        console.log("Promise resolved with the value:", value);
        }
        catch (error) {
            console.log("Error:", error);
        }
    }

handleRejectResolve();
