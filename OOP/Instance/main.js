class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}
 
const johnCar = new Car("Honda", "Red");

/* Sama seperti constructor function, untuk membuat instance dari class pada ES6 kita gunakan keyword new. */

/**
 * Pembuatan class menggunakan ES6 lebih ketat dibandingkan dengan constructor function, 
 * di mana dalam pembuatan instance wajib menggunakan keyword new. Jika kita tidak menuliskannya,
 * maka akan terjadi error seperti ini:
 */

class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}
 
const johnCar = Car("Honda", "Red");
 
/* error:
TypeError: Class constructor Car cannot be invoked without 'new'
*/


/**
 * Kita juga dapat membuat banyak instance dari class yang sama, dan tentunya objek yang kita buat memiliki karakteristik 
 * (properti dan method) yang sama. Walaupun sama, namun nilai dari propertinya bersifat unik atau bisa saja berbeda.
 * Contohnya seperti ini:
 */


class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}
 
const johnCar = new Car("Honda", "Red");
const adamCar = new Car("Tesla", "Black");
 
console.log(johnCar.manufacture);
console.log(adamCar.manufacture);
 
/* output:
Honda
Tesla
*/