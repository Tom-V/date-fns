/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import endOfQuarter from './index'

describe('endOfQuarter', () => {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a quarter', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = endOfQuarter(date)
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime()
    const result = endOfQuarter(date)
    assert.deepStrictEqual(
      result,
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfQuarter(date)
    assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = endOfQuarter(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })
})
