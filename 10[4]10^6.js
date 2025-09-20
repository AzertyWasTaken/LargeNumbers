n = 10;

// This function returns 10^^n.

function tetration(a) {
    for (i = 0; i < a; i++) {
        n = 10**n;
    }
}

// This function returns 10^^^n.

function pentation(a) {
    for (i = 0; i < a; i++) {
        tetration(a);
    }
}

// Repeat pentation to perform a hexation.

for (i = 0; i < 1000000; i++) {
    pentation(n);
}

return n;