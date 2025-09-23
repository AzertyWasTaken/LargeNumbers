//Create the starting array for the function f.
function createArray(n) {
    let a = [1];
    for (let i = 0; i < n; i++) {
        a.unshift(0);
    }
    return a;
}

//Find the first item > 0 of an array.
function findPosItem(a) {
    let p = 0;
    while (a[p] == 0) {p++;}
    return p;
}

//Expand a linear array.
function expandArray(n, a) {
    a = a.slice();

    let pos = findPosItem(a);
    a[pos]--;
    a[pos - 1] = n;

    if (a[a.length - 1] == 0) {a.pop();}

    return a;
}

//Set n to 10[a(1)b]n.
function f(n, a, b) {
    a = a.slice();
    b = b.slice();

    //console.log(a, b);
    if (a[0] > 0) {
        //Iterate the function if the array a is successor.
        a[0]--;

        let k = 10;
        for (let i = 0; i < n; i++) {
            k = f(k, a, b);
        }
        return k;

    } else if (a.length > 1) {
        //Expand the array a if it is limit.
        return f(10, expandArray(n, a), b);
    
    } else if (b[0] > 0) {
        //Reset the array a if the array b is successor.
        b[0]--;

        return f(10, createArray(n), b);

    } else if (b.length > 1) {
        //Expand the array b if it is limit.
        return f(10, [0], expandArray(n, b));

    } else {
        //Set rule 10[0]n = 10*n
        return 10*n;
    }
}

return f(10, [0], createArray(1000000));
