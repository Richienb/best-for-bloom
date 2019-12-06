/**
 * Calculate amount of bits and hash functions based on the amount of items and the probability of false positives.
 * @param items Number of items in the filter.
 * @param probability Probability of false positives, decimal between 0 and 1. Default is 1e-7 (1 in 1 million).
 * @example
 * ```
 * const bestForBloom = require("best-for-bloom");
 *
 * bestForBloom(100000, 1e-6)
 * //=> { bits: 2875518, hash: 20 }
 * ```
*/
declare function bestForBloom(items: number, probability?: number): {
    /**
     * Best amount of bits.
    */
    bits: number,

    /**
     * Best amount of hash functions.
    */
    hash: number,
};

export = bestForBloom;
