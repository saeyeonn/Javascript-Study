function count() {
    var age = 20; // global
    const PI = 3.14;
    let counter = 0; // region (current block)
    counter++;        
    alert(counter);
}        