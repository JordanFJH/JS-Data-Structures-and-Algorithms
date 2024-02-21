// This is an O(n) function
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    // Drop constant example
    for (let j = 0; j < n; j++) {
        console.log(j)
    }
}

// logItems(3)


// O(1) - A Constant

function addItems(n) {
    return n + n
}