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

//Set n to 10[a]n.
function f(n, a) {
    while (true) {
        //console.log(a);
        if (a[0] > 0) {
            //Increase n if the array is successor.
            a[0]--;
            n *= 10;

        } else if (a.length > 1) {
            //Expand the array if it is limit.
            a = expandArray(n, a);

        } else {
            //Halt if the array is [0].
            return 10*n;
        }    
    }
}

return f(10, createArray(1000000));