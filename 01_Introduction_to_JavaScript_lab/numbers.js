function printRandNum() {

    //Math.round rounds the number
    let num = Math.round(
        //we generate a random number up to 100 that will be a double number (53.27070414554005)
        Math.random() * 100);
    document.body.innerHTML +=
        `<div>${num}</div>`;
}
