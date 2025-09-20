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

// g(a, 0) = f(10, a)
// g(a, b + 1) = g^a(10, b)
// g^{a+1}(a, b) = g(f^a(a, b), b)

function g(a, b) {
    if (b <= 0) {
        return f(10, a);
        
    } else {
        let n = 10;
        for (i = 0; i < a; i++) {
            n = g(n, b - 1);
        }
        return n;
    }
}

return g(10, 1000000);