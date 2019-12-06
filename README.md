# Best For Bloom [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/best-for-bloom/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/best-for-bloom)

Calculate amount of bits and hash functions based on the amount of items and the probability of false positives.

[![NPM Badge](https://nodei.co/npm/best-for-bloom.png)](https://npmjs.com/package/best-for-bloom)

## Install

```sh
npm install best-for-bloom
```

## Usage

```js
const bestForBloom = require("best-for-bloom");

bestForBloom(100000, 1e-6)
//=> { bits: 2875518, hash: 20 }
```

## API

### bestForBloom(items, probability)

#### items

Type: `number`

Number of items in the filter.

#### probability

Type: `number`

Probability of false positives, decimal between 0 and 1. Default is 1e-7 (1 in 1 million).
