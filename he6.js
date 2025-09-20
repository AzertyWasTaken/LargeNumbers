n = 10;

// Set tetration function.

function tetration(a) {
    for (i = 0; i < a; i++) {
        n = 10**n;
    }
}

// Set pentation function.

function pentation(a) {
    for (i = 0; i < a; i++) {
        tetration(a);
    }
}

// Repeat pentation.

for (i = 0; i < 1000000; i++) {
    pentation(n);
}

return n;