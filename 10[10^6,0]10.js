// f(a, 0, 0) = 10^a
// f(a, 0, c+1) = f(10, a, c)
// f(a, b + 1, c) = f^a(10, b, c)
// f^{a+1}(a, b, c) = f(f^a(a, b, c), b, c)

function f(a, b, c) {
    if (b <= 0 && c <= 0) {
        return 10**a;

    } else if (b <= 0) {
        return f(10, a, c - 1);

    } else {
        let n = 10;
        for (i = 0; i < a; i++) {
            n = f(n, b - 1, c);
        }
        return n;
    }
}

return f(10, 0, 1000000);