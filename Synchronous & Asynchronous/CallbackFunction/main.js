const getCoffee = (callback) => {
    let coffee = ""
    console.log("Mohon Tunggu Sebentar Kopi Sedang di siapkan . . . ");

    setTimeout(() => {
        coffee = "Hidangan siap :)"
        callback(coffee)
    }, 3000)
}

getCoffee(coffee => {
    console.log(coffee);
})