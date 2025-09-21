n = 10;

// This function returns 10^^n.

function tetration(a) {
    for (let i = 0; i < a; i++) {
        n = 10**n;
    }
}

tetration(1000000);

tetration(n);

return n;