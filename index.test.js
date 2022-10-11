import { expect } from "chai"
import doubleNumber from './index.js'

describe('index.js', () => {
    context('doubleNumber', () => {
        it('should double the number', () => {
            expect(doubleNumber(2)).to.equal(4)
        })
    });
});