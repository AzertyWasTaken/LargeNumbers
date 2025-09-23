//Set n to 10^^n.
function tetration(n) {
    //Each iteration set n to 10^n.
    n = 1;
    for (let i = 0; i < n; i++) {
        n = 10**n;
    }
    return n;
}

return tetration(1000000);