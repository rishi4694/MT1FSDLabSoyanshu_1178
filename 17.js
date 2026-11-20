let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 4, 5, 6, 7];

let set2 = new Set(a2);

let c = a1.filter(num => set2.has(num));

console.log("Common elements:", c);