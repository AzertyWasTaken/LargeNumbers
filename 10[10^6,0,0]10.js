// f(n, 0, 0, 0) = 10^n
// f(n, 0, 0, c+1) = f(10, 0, n, c)
// f(n, 0, b+1, c) = f(10, n, b, c)
// f(n, a + 1, b, c) = f^n(10, a, b, c)
// f^{n+1}(n, a, b, c) = f(f^n(n, a, b, c), a, b, c)

function f(n, a, b, c) {
    if (a == 0 && b == 0 && c == 0) {
        return 10*n;

    } else if (a == 0 && b == 0) {
        return f(10, 0, n, c - 1);

    } else if (a == 0) {
        return f(10, n, b - 1, c);

    } else {
        let k = 10;
        for (i = 0; i < n; i++) {
            k = f(k, a - 1, b, c);
        }
        return k;
    }
}

return f(10, 0, 0, 1000000);