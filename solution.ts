//problem 1
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    return !value;
};

//problem 2
const getLength = (value: string | any[]): number => {
    return value.length;
};


//problem 3
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

//problem 4
const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    return items.filter((item) => item.rating >= 4);
};

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

//problem 5
const filterActiveUsers = (users: { id: number; name: string; email: string; isActive: boolean }[]): { id: number; name: string; email: string; isActive: boolean }[] => {
    return users.filter((user) => user.isActive === true);
};

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


//problem 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    const status = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${status}`);
};

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook);

//problem 7
const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]): (string | number)[] => {
    const result: (string | number)[] = [];

    for (let i = 0; i < array1.length; i++) {
        let found = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === array1[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === array2[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(array2[i]);
        }
    }

    return result;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValues = getUniqueValues(array1, array2);

//problem 8
const calculateTotalPrice = (products: { name: string; price: number; quantity: number; discount?: number }[]): number => {
    if (products.length === 0) {
        return 0;
    }

    return products.reduce((total, product) => {
        const subtotal = product.price * product.quantity;
        if (product.discount) {
            const discountAmount = subtotal * (product.discount / 100);
            return total + (subtotal - discountAmount);
        }
        return total + subtotal;
    }, 0);
};

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
const totalPrice = calculateTotalPrice(products);
