// QUESTION 1 ------------------------------------------------------------------

export const arrayMean = (array: number[]): number | undefined => {
    if (array.length != 0) {
        return array.reduce((sum, curr) => sum + curr) / array.length
    }
    return undefined
};

console.log(arrayMean([1, 2, 3, 4, 5])); // 3
console.log(arrayMean([])); // undefined

// QUESTION 2 ------------------------------------------------------------------

type Apartment = {
    id: string;
    rent: number;
};

export const affordableHousing = (
    listings: Apartment[],
    budget: number
): string[] => {
    let apts: Apartment[] = listings.filter(apt => apt.rent <= budget)
    return apts.map(apt => apt.id)
};

const apts: Apartment[] = [
    { id: 'orbis', rent: 5000 },
    { id: 'ereve', rent: 12345 },
    { id: 'henesys', rent: 1337 },
]

console.log(affordableHousing(apts, 5000)); // ['orbis', 'henesys']
console.log(affordableHousing(apts, 4000)); // ['henesys']

// QUESTION 3 ------------------------------------------------------------------

export const evenEven = (array?: string[]): boolean => {
    if (array != undefined) {
        let evenStrings: string[] = array.filter(str => str.length % 2 == 0)
        if (evenStrings.length != 0) return evenStrings.every(str => str.indexOf('even') != -1)
    }
    return true
};
console.log(evenEven()); // true
console.log(evenEven([])); // true
console.log(evenEven(['bob'])); // true
console.log(evenEven(['bob', 'steven'])); // true
console.log(evenEven(['bob', 'steven', 'even'])); // true
console.log(evenEven(['bob', 'steven', 'anna'])); // false

// QUESTION 4 ------------------------------------------------------------------

type Doggo = {
    name: string,
    age: number,
    breed: string
}

export const makeSentences = (array: Doggo[]): string[] => {
    return array.map(({ name, age, breed }: Doggo) =>
        name + ' is ' + (age).toFixed(1) + ' years old and is a ' + breed)
};

const doggos = [
    { name: 'Sparky', age: 3.35, breed: 'Pomeranian Husky' },
    { name: 'Oreo', age: 5.42, breed: 'Dalmatian' },
    { name: 'Stella', age: 4, breed: 'Alaskan Klee Kai' },
];

console.log(makeSentences(doggos));
// [
//     'Sparky is 3.4 years old and is a Pomeranian Husky',
//     'Oreo is 5.4 years old and is a Dalmatian',
//     'Stella is 4.0 years old and is a Alaskan Klee Kai',
// ];
