let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.shift(); // takes away 0 index
largeCountries.unshift("China"); // adds 0 index

largeCountries.pop(); // takes away last index
largeCountries.push("Pakistan"); // adds last index

console.log(largeCountries);
