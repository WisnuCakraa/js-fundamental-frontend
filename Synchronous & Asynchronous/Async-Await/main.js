
/* FROM THIS */
function makeCoffee() {
    const coffee = getCoffee();
    console.log(coffee);
   }
    
makeCoffee();

/* async await */
async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
   }
    
   makeCoffee();
    
/* callback */
function makeCoffee() {
    getCoffee((coffee) => {
        console.log(coffee);
    })
}

/* promise  */
function makeCoffee() {
    getCoffee()
    .then(coffee => {
      console.log(coffee)
    })
   }
    
/* . .   .   .    */
makeCoffee();