// This function generalizes hyperoperations.

function f(n, a) {
    // console.log(a);

    if (a > 0) {
        // f(n, a + 1) = f^n(10, a)
        // f^{n+1}(n, a) = f(f^n(n, a), a)

        let k = 10;
        for (let i = 0; i < n; i++) {
            k = f(k, a - 1);
        }
        return k;
        
    } else {
        // f(n, 0) = 10^n
        return 10*n;
    }
}

return f(10, 1000000);