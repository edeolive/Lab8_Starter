// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test ('isPhoneNumber returns true on valid phone number', () => {
	expect(functions.isPhoneNumber('(605) 224-7800')).toBe(true);
	expect(functions.isPhoneNumber('4-800-909-3482')).toBe(true);
});

test ('isPhoneNumber returns false on invalid phone number', () => {
	expect(functions.isPhoneNumber('3141')).toBe(false);
	expect(functions.isPhoneNumber('phone number')).toBe(false);
});

// isEmail
test ('isEmail returns true on valid email', () => {
	expect(functions.isEmail('hogman@thumbs.com')).toBe(true);
	expect(functions.isEmail('hangman@fbi.gov')).toBe(true);
});

test ('isEmail returns false on invalid email', () => {
	expect(functions.isEmail('alan@broken.network')).toBe(false);
	expect(functions.isEmail('archetypal at uscd.edu')).toBe(false);
});

// isStrongPassword
test ('isStrongPassword returns true on valid password', () => {
	expect(functions.isStrongPassword('Password123')).toBe(true);
	expect(functions.isStrongPassword('MoreS_ecure23')).toBe(true);
});

test ('isStrongPassword returns false on invalid password', () => {
	expect(functions.isStrongPassword('a1漢字')).toBe(false);
	expect(functions.isStrongPassword('thispasswordiswaywaywaywaywaytoolong1')).toBe(false);
});

// isDate
test ('isDate returns true on valid date', () => {
	expect(functions.isDate('05/22/1972')).toBe(true);
	expect(functions.isDate('2/14/3092')).toBe(true);
});

test ('isDate returns false on invalid date', () => {
	expect(functions.isDate('25 Dec 1949')).toBe(false);
	expect(functions.isDate('11/11/98765')).toBe(false);
});

// isHexColor
test ('isHexColor returns true on valid hex color', () => {
	expect(functions.isHexColor('#F1A')).toBe(true);
	expect(functions.isHexColor('1E36B2')).toBe(true);
});

test ('isHexColor returns false on invalid hex color', () => {
	expect(functions.isHexColor('(145, 20, 92)')).toBe(false);
	expect(functions.isHexColor('$1E36B2')).toBe(false);
});