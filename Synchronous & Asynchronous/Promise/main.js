const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady) {
      resolve("Kopi berhasil dibuat");
    } else {
      reject("Mesin Kopi tidak bisa digunakan!")
    }
   }
    
   const handlerSuccess = resolvedValue => {
    console.log(resolvedValue);
   }
    
   const handlerRejected = rejectionReason => {
    console.log(rejectionReason)
   }

   const makeCoffee = new Promise(executorFunction);
   makeCoffee.then(handlerSuccess, handlerRejected)
