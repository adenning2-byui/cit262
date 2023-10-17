import name from "../utils/name.js";

test('should return "Adam"', () => {
    const result = name();
    expect(result).toBe("Adam");
});