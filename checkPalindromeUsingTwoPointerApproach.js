//checking palindromes in JavaScript using the two-pointer approach

function isPalindrome(str) {
  // Handle case sensitivity (optional)
  str = str.toLowerCase();

  // Create pointers for the beginning and end of the string
  let i = 0;
  let j = str.length - 1;

  // Iterate inwards, comparing characters at each pointer
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;  // Not a palindrome if characters mismatch
    }
    i++;
    j--;
  }
  return true;  // Palindrome if all characters match
}

// Example usage
const text = "babad";  //Check racecar -> Palindrome
if (isPalindrome(text)) {
  console.log(`${text} is a palindrome.`);
} else {
  console.log(`${text} is not a palindrome.`);
}