// This function checks to see if a given value is a palindrome
// - An integer is a palindrome when it reads the same backward as forward.
// - The function returns true if the value is a palindrome; else - the function returns false.

const isPalindrome = (string) => {
    const arrayValues = string.toString().split('');
   
     if(arrayValues.includes('-')) {
           return false;
       }
 
     // reverse the initial values 
     const reverseArrayValues = arrayValues.reverse();
 
     // convert array to string
     const reverseString = reverseArrayValues.join('');
     
     // If string is palindrome return true; else resturn false     
     if(string == reverseString) {
         return true;
     }
     else {
         return false;
     }
 };
 
 let testNumber = isPalindrome(-10);
 console.log(testNumber);