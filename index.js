function flatConcat(array) {
    let flattened = array.reduce(
        function(a, b) {
            return a.concat(b)
        }, []
    )
    return flattened
}
