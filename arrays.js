let arrays = ["Hello", true, "how come", 123, 333];
console.log(arrays[3]);

arrays[3] = false;
console.log(arrays);

console.log(arrays.length);

for (i = 0; i < arrays.length; i++) {
    console.log("output of array in a for loop: ", arrays[i]);
}

console.log("Check if the array is actually an Array: ", Array.isArray(arrays));

let stack = [];

stack.push("First");
console.log(stack);

stack.push("Second");
console.log(stack);

stack.push("Third");
console.log(stack);

stack.push("Fourth");
console.log(stack);

stack.push("Fifth", "Sixth");
console.log(stack);

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

stack.pop()
console.log(stack)

function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        console.log(stack);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
        console.log(reverseStr);
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ