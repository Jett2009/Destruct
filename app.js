const hasDuplicate = (arr) => (new Set(arr).size === arr.length ? false : true);

const vowelCount = (str) => {
	const vowels = Array.from("aeiou");
	const strVowels = Array.from(str.toLowerCase()).filter((char) => {
		for (let vowel of vowels) {
			if (char === vowel) return true;
		}
	});
	const singleVowels = [...new Set(strVowels)];
	const vowelMap = new Map();
	for (let char of singleVowels) {
		// let count = 0;
		// for (let vowel of strVowels) {
		//     if (char === vowel) {
		//         count++;
		//     }
		// }
		vowelMap.set(
			char,
			strVowels.reduce((count, vowel) => {
				if (char.includes(vowel)) return (count += 1);
				return count;
			}, 0)
		);
	}
	return vowelMap;
};
