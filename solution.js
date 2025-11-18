//problem 1
var formatValue = function (value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    return !value;
};
console.log("Problem 1:", formatValue('hello'));
console.log("Problem 1:", formatValue(5));
console.log("Problem 1:", formatValue(true));
//problem 2
var getLength = function (value) {
    return value.length;
};
console.log("Problem 2:", getLength('typescript'));
console.log("Problem 2:", getLength([10, 20, 30, 40]));
//problem 3
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
var person1 = new Person('John Doe', 30);
console.log("Problem 3:", person1.getDetails());
var person2 = new Person('Alice', 25);
console.log("Problem 3:", person2.getDetails());
//problem 4
var filterByRating = function (items) {
    return items.filter(function (item) { return item.rating >= 4; });
};
var books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
console.log("Problem 4:", filterByRating(books));
//problem 5
var filterActiveUsers = function (users) {
    return users.filter(function (user) { return user.isActive === true; });
};
var users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
console.log("Problem 5:", filterActiveUsers(users));
var printBookDetails = function (book) {
    var status = book.isAvailable ? 'Yes' : 'No';
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published: ").concat(book.publishedYear, ", Available: ").concat(status));
};
var myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
console.log("Problem 6:");
printBookDetails(myBook);
//problem 7
var getUniqueValues = function (array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        var value = array1[i];
        if (value === undefined)
            continue;
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j] === value) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(value);
        }
    }
    for (var i = 0; i < array2.length; i++) {
        var value = array2[i];
        if (value === undefined)
            continue;
        var exists = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j] === value) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(value);
        }
    }
    return result;
};
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log("Problem 7:", getUniqueValues(array1, array2));
//problem 8
var calculateTotalPrice = function (products) {
    if (products.length === 0) {
        return 0;
    }
    return products.reduce(function (total, product) {
        var subtotal = product.price * product.quantity;
        if (product.discount) {
            var discountAmount = subtotal * (product.discount / 100);
            return total + (subtotal - discountAmount);
        }
        return total + subtotal;
    }, 0);
};
var products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
console.log("Problem 8:", calculateTotalPrice(products));
