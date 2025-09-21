// Find the first item greater than 0 of an array.

function firstNonZero(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {return i;}
    }
}

// This function computes a fast-growing hierarchy up to f_{w^(w+1)}.

function f(n, a, b) {
    a = a.slice();
    // console.log(a, b);

    if (a[0] > 0) {
        // f_{a+1}(n) = f_{a}^n(10)

        a[0]--;
        let k = 10;
        for (let i = 0; i < n; i++) {
            k = f(k, a, b);
        }
        return k;

    } else if (a.length > 1) {
        // f_a(n) = f_{a[n]}(10)

        let pos = firstNonZero(a);
        a[pos - 1] = n;
        a[pos]--;
        if (a[a.length - 1] == 0) {a.pop();}

        return f(10, a, b);

    } else if (b > 0) {
        // f_{w^w*(k+1)}(n) = f_{w^w*k+w^n}(10)

        let array = [1];
        for (let i = 0; i < n; i++) {
            array.unshift(0);
        }

        return f(10, array, b - 1)

    } else {
        // f_0(n) = 10*n
        return 10*n;
    }
}

return f(10, [0], 1000000);