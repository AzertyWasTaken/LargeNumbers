// Find the first item greater than 0 of an array.
function firstNonZero(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 0) {return i;}
    }
}

// Compute a variant of fast-growing hierarchy up to f_{w^w}.
function f(n, a) {
    a = a.splice()

    if (b[0] == 0) {
        // Expand the ordinal if it is not limit.

        let pos = firstNonZero(a);
        a[pos - 1] = n;

        a[pos]--;
        if (a[pos] == 0) {a.pop();}

    } else {
        a[0]--;
        let n = 10;
        for (i = 0; i < a; i++) {
            n = f(n, a);
        }
        return n;
    }
}

array = [1];
for (i = 0; i < 1000000; i++) {
    array.unshift(0);
}

return f(10, array);