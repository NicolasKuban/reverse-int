module.exports = function reverse (n) {
    result = (String(Math.abs(n))).split("").reverse().join("")
    return Number(result)
}
