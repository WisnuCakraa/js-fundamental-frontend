const makeCoffee = new Promise((resolve, reject)=> {
    const isCoffeeMakerReady = false;
    if(isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat");
    } else {
      reject("Mesin Kopi tidak bisa digunakan!")
    }
   });
    
const handlerSuccess = resolvedValue => {
 console.log(resolvedValue);
}
 
const handlerRejected = rejectionReason => {
 console.log(rejectionReason)
}

makeCoffee.then(handlerSuccess).catch(handlerRejected)
