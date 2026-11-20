function myRace(arr) {
    return new Promise((resolve, reject) => {
        arr.forEach(function(p) {
            p.then(resolve).catch(reject);
        });
    });
}

let p1 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 2000));

let p2 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 1000));

let p3 = new Promise(resolve =>
    setTimeout(() => resolve("Third"), 3000));

myRace([p1, p2, p3]).then(result => {
    console.log("Result:", result);
});