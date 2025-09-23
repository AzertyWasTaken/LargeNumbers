//Set n to 10[a]n.
function f(n, a, b) {
    //console.log(a, b);
    if (a > 0) {
        //Each iteration set n to 10[b,a-1]n.
        let k = 10;
        for (let i = 0; i < n; i++) {
            k = f(k, a - 1, b);
        }
        return k;

    } else if (b > 0) {
        //Set rule 10[b,0]n = 10[b-1,n]10
        return f(10, n, b - 1);

    } else {
        //Set rule 10[0]n = 10*n
        return 10*n;
    }
}

return f(10, 0, 1000000);