//WRITE YOUR CODE BELOW
let customerOrder = {
    name: "Truffle Shuffle",
    sugars: 26,
    order_ready: true,
};

console.log (customerOrder.name)
console.log (customerOrder.sugars)

function orderReady () {
    //customerOrder.order_ready? true : false
    if (customerOrder.order_ready === true) {
        console.log ("Ready for pick-up");
    } else {
        console.log ("Still in order queue");
    }     
}

orderReady ();