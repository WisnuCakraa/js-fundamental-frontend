const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(...favorites);


// .       ..      .


/* Math.max() -> Mencari nilai terbesar */
const numbers = [12, 32, 90, 12, 32];
 
// Sama seperti kita menuliskan
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])
 
console.log(Math.max(...numbers));



/* Spread operator dapat digunakan untuk menggabungkan dua buah array dalam objek array baru. */
/* Jika tidak menggunakan spread operator ini maka hasilnya seperti ini: */

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
 
const allFavorites = [favorites, others]
 
console.log(allFavorites);

// jika menggunakan spread operator maka hasilnya seperti ini 

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
 
const allFavorites = [...favorites, ...others]
 
console.log(allFavorites); // [ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
console.log(...allFavorites); // Seafood Salad Nugget Soup Cake Pie Donut 



/* variadic function */
/* fungsi untuk menjumlahkan seluruh nilai argument fungsi yang diberikan */

function sum(...numbers) {
    var result = 0;
    for(let number of numbers) {
        result += number
    }
    return result;
}
 
console.log(sum(1,2,3,4,5)); // 15

/* Rest parameter */

const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];
 
const [manufacture, weight, door, ...items] = refrigerator;
 
console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);

/* output:
Samsung
50
2
[ 'milk', 'cheese', 'egg', 'butter' ]
*/