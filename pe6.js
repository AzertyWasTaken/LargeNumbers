n = 10;

// Set tetration function.

function tetration(a) {
    for (i = 0; i < a; i++) {
        n = 10**n;
    }
}

// Repeat tetration.

for (i = 0; i < 1000000; i++) {
    tetration(n);
}

return n;