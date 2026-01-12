
function fibonacci(n: number): number {
    
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

   
    if (n === 0) {
        return 0;
    }

   
    if (n === 1) {
        return 1;
    }

    //added optimization to reduce space complexity kasdf 
   let prev:number=0;
   let curr:number=1

    for (let i = 2; i < n; i++) {
        const next:number = prev+ curr;
         prev=curr;
            curr=next;
    }

return curr;
}

// --- Manual Testing ---
console.log(fibonacci(0)); //returns 0

console.log(fibonacci(1));   // returns 1
console.log(fibonacci(10)); //returns 55