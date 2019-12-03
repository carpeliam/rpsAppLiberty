const rps = require('../src/rps');

describe('RPS', () => {
    it('runs a test', () => {
        expect(rps.JUST_STARTING).toEqual(true);
    });
});
