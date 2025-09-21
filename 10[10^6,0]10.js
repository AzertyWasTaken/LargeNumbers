// f(n, 0, 0) = 10^n
// f(n, 0, b+1) = f(10, n, b)
// f(n, a + 1, b) = f^n(10, a, b)
// f^{n+1}(n, a, b) = f(f^n(n, a, b), a, b)

function f(n, a, b) {
    if (a == 0 && b == 0) {
        return 10*n;

    } else if (a <= 0) {
        return f(10, n, b - 1);

    } else {
        let k = 10;
        for (i = 0; i < n; i++) {
            k = f(k, a - 1, b);
        }
        return k;
    }
}

return f(10, 0, 1000000);