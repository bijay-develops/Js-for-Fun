// const str = "Hello JS Users, You Are Awesome";

// Ask the user for input
// const userInput = prompt("Enter a string:");
// if (userInput) {
//     const result = countVowels(userInput);
//     alert("The number of vowels is: " + result);
// }

// const vowels = ['a', 'e', 'i', 'o', 'u'];

// function countVowels(data) {
//     let count = 0;

//     data.toLowerCase().split("").forEach((ch) => {
//         if (vowels.includes(ch)) {
//             count++;
//         }
//     });

//     return count;
// }

// console.log(countVowels(str)); 



const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(data) {
    let count = 0;

    data.toLowerCase().split("").forEach((ch) => {
        if (vowels.includes(ch)) {
            count++;
        }
    });

    return count;
}

function handleClick() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        const result = countVowels(userInput);
        document.getElementById('result').textContent = "The number of vowels is: " + result;
    } else {
        alert("Please enter a string.");
    }
}

console.log(countVowels("Hello JS Users, You Are Awesome"));
