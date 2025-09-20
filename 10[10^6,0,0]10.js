// f(a, 0, 0, 0) = 10^a
// f(a, 0, 0, d+1) = f(10, 0, a, d)
// f(a, 0, c+1, d) = f(10, a, c, d)
// f(a, b + 1, c, d) = f^a(10, b, c, d)
// f^{a+1}(a, b, c, d) = f(f^a(a, b, c, d), b, c, d)

function f(a, b, c, d) {
    if (b <= 0 && c <= 0 && d <= 0) {
        return 10**a;

    } else if (b <= 0 && c <= 0) {
        return f(10, 0, a, d - 1);

    } else if (b <= 0) {
        return f(10, a, c - 1, d);

    } else {
        let n = 10;
        for (i = 0; i < a; i++) {
            n = f(n, b - 1, c, d);
        }
        return n;
    }
}

return f(10, 0, 1000000);