// This is a helper for all of the calculations

/**
 * Private functions
 */

// TODO - https://stackoverflow.com/a/12830454
function round (input, decimal) {
    return input.toFixed(decimal)
}

/**
 * Basic Maths Calculations
 * Two param two inputs returning the result
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
export function addition(a, b) {
    return a + b
}

export function subtract(a, b) {
    return a - b
}

export function multiply(a, b) {
    return a * b
}

export function divide(a, b) {
    return a / b
}

/**
 * Advanced Maths Calculations 
 */

export function square(a, b) {
    return Math.pow(a, b)
}

export function root(a) {
    return Math.sqrt(a)
}

export function piCircumference(radius) {
    return 2 * Math.PI * radius
}

export function piDiameter(radius) {
    return 2 * Math.PI * radius
}

export function piRadius(circumference, decimalPlace) {
    return round(circumference / (2 * Math.PI), decimalPlace)
}