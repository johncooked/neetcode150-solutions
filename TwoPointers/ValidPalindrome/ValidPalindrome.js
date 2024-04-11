/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    const newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (newS.length === 0) {
        return true;
    }

    for (let i = 0; i < newS.length; i++) {
        let j = newS.length - (i + 1);

        if (newS[i] !== newS[j]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("a"));
