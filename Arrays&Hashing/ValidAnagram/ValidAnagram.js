/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charFreqS = {};
    const charFreqT = {};

    for (let char of s) {
        charFreqS[char] = (charFreqS[char] || 0) + 1;
    }

    for (let char of t) {
        charFreqT[char] = (charFreqT[char] || 0) + 1;
    }

    for (let char in charFreqS) {
        if (charFreqS[char] !== charFreqT[char]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

// Test Unicode
console.log(isAnagram("नमस्ते", "स्तेमन"));
