//Set n to 10[a]n.
function f(n, a) {
    //console.log(a);
    if (a > 0) {
        //Each iteration set n to 10[a-1]n.
        let k = 10;
        for (let i = 0; i < n; i++) {
            k = f(k, a - 1);
        }
        return k;

    } else {
        //Set rule 10[0]n = 10*n
        return 10*n;
    }
}

return f(10, 1000000);