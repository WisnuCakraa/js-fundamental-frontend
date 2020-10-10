async function makeCoffe() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.error(rejectedReason);
    }
}

makeCoffe()