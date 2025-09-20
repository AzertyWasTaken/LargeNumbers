// A for loop is used to repeat nested exponentiation (tetration).

n = 10;
for (i = 0; i < 1000000; i++) {
    n = 10**n;
}

return n;