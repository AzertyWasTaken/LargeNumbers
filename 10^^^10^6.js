n = 10;

// This function returns 10^^n.

function tetration(a) {
    for (i = 0; i < a; i++) {
        n = 10**n;
    }
}

// Repeat tetration to perform a pentation.

for (i = 0; i < 1000000; i++) {
    tetration(n);
}

return n;