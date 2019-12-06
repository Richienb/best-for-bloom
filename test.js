import test from "ava"
import bestForBloom from "."

test("main", (t) => {
    t.deepEqual(bestForBloom(100000, 1e-6), { bits: 2875518, hash: 20 })
})
