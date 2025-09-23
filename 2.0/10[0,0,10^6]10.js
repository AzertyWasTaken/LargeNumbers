//Set n to 10[a]n.
function f(n, a, b, c) {
    //console.log(a, b, c);
    if (a > 0) {
        //Each iteration set n to 10[c,b,a-1]n.
        let k = 10;
        for (let i = 0; i < n; i++) {
            k = f(k, a - 1, b, c);
        }
        return k;

    } else if (b > 0) {
        //Set rule 10[b,0]n = 10[c,b-1,n]10
        return f(10, n, b - 1, c);

    } else if (c > 0) {
        //Set rule 10[c,0,0]n = 10[c-1,n,0]10
        return f(10, 0, n, c - 1);

    } else {
        //Set rule 10[0]n = 10*n
        return 10*n;
    }
}

return f(10, 0, 0, 1000000);