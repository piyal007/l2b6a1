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
