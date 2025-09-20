// This function generalizes hyperoperations.
// f(a, 0) = 10^a
// f(a, b + 1) = f^a(10, b)
// f^{a+1}(a, b) = f(f^a(a, b), b)

function f(a, b) {
    if (b <= 0) {
        return 10**a;
        
    } else {
        let n = 10;
        for (i = 0; i < a; i++) {
            n = f(n, b - 1);
        }
        return n;
    }
}

// Repeat the f function.

n = 10;
for (i = 0; i < 1000000; i++) {
    n = f(10, n);
}

return n;