const stringSum = require('../src/stringSum');

describe('String Sum Utility', () => {
    test('should return sum of two valid natural number strings', () => {
        expect(stringSum("12", "8")).toBe("20");
    });

    test('should return "0" if either input is empty', () => {
        expect(stringSum("", "5")).toBe("5");
        expect(stringSum("7", "")).toBe("7");
        expect(stringSum("", "")).toBe("0");
    });

    test('should treat invalid numbers as "0"', () => {
        expect(stringSum("abc", "5")).toBe("5");
        expect(stringSum("5", "-3")).toBe("5");
        expect(stringSum("abc", "-3")).toBe("0");
    });

    test('should handle large numbers correctly', () => {
        expect(stringSum("999999999", "1")).toBe("1000000000");
    });

    test('should return "0" if both inputs are "0"', () => {
        expect(stringSum("0", "0")).toBe("0");
    });
});
