// This function computes a fast-growing hierarchy up to f_{w^2}.

function f(n, a, b) {
    // console.log(a, b);

    if (a > 0) {
        // f(n, a + 1, b) = f^n(10, a, b)
        // f^{n+1}(n, a, b) = f(f^n(n, a, b), a, b)

        let k = 10;
        for (let i = 0; i < n; i++) {
            k = f(k, a - 1, b);
        }
        return k;

    } else if (b > 0) {
        // f(n, 0, b+1) = f(10, n, b)
        return f(10, n, b - 1);

    } else {
        // f(n, 0, 0) = 10^n
        return 10*n;
    }
}

return f(10, 0, 1000000);