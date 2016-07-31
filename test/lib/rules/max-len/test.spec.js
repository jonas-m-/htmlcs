/**
 * @file test for max-len
 * @author chris<wfsr@foxmail.com>
 */

var path = require('path');
var hinter = require('../../../../');

var rule = path.basename(__dirname);

describe('rule ' + rule, function () {
    var result = hinter.hintFile(path.join(__dirname, 'case.html'));

    it('should return right result', function () {
        expect(result.length).toBe(3);

        expect(result[0].type).toBe('WARN');
        expect(result[0].code).toBe('048');
        expect(result[0].line).toBe(6);
        expect(result[0].column).toBe(1);

        expect(result[1].type).toBe('WARN');
        expect(result[1].code).toBe('048');
        expect(result[1].line).toBe(7);
        expect(result[1].column).toBe(1);

        expect(result[2].type).toBe('WARN');
        expect(result[2].code).toBe('048');
        expect(result[2].line).toBe(24);
        expect(result[2].column).toBe(1);
    });
});
