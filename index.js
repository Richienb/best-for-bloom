"use strict"

module.exports = (items, probability = 1e-7) => {
    const bits = Math.ceil((items * Math.log(probability)) / Math.log(1 / (2 ** Math.log(2))))
    const hash = Math.round((bits / items) * Math.log(2))
    return {
        bits,
        hash,
    }
}
