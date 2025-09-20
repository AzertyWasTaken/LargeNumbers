// This function generalizes hyperoperations.
// f(n, 0) = 10^n
// f(n, a + 1) = f^a(n, a)

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

return f(10, 1000000);