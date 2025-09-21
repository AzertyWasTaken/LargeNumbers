// This function generalizes hyperoperations.
// f(n, 0) = 10^n
// f(n, a + 1) = f^n(10, a)
// f^{n+1}(n, a) = f(f^n(n, a), a)

function f(n, a) {
    if (a == 0) {
        return 10*n;
        
    } else {
        let k = 10;
        for (i = 0; i < n; i++) {
            k = f(k, a - 1);
        }
        return k;
    }
}

// Repeat the f function.

n = 10;
for (i = 0; i < 1000000; i++) {
    n = f(10, n);
}

return n;