// The tetration function is used twice in a row.

n = 10;

function tetration(a) {
    for (i = 0; i < a; i++) {
        n = 10**n;
    }
}

tetration(1000000);

tetration(n);

return n;