const lunches = [];

const addLunchToEnd = (array, lunchItem) => {
    array.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return array;
};

const addLunchToStart = (array, lunchItem) => {
    array.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return array;
};

const removeLastLunch = (array) => {
    const removedLunchItem = array.pop();

    if (removedLunchItem !== undefined) {
        console.log(`${removedLunchItem} removed from the end of the lunch menu.`);
    } else {
        console.log(`No lunches to remove.`);
    }
    return array;
};

const removeFirstLunch = (array) => {
    const removedLunchItem = array.shift();

    if (removedLunchItem !== undefined) {
        console.log(`${removedLunchItem} removed from the start of the lunch menu.`);
    } else {
        console.log(`No lunches to remove.`);
    }
    return array;
};

const getRandomLunch = (array) => {
    if (array.length > 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomLunchItem = array[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunchItem}`);
    } else {
        console.log(`No lunches available.`);
    }
};

const showLunchMenu = (array) => {
    if (array.length > 0) {
        const menuItemsString = array.join(", ");
        console.log(`Menu items: ${menuItemsString}`);
    } else {
        console.log(`The menu is empty.`);
    }
};