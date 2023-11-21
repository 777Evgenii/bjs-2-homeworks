function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item) => arr1[item] === arr2[item]);
}


function getUsersNamesInAgeRange(users, gender) {
    return users
    .filter(user => user.gender === gender)
    .map(result => result.age)
    .reduce((summ, userAge, index, arr) => {
        summ += userAge;
        if (index === arr.length - 1) {
            return summ / arr.length;
        }
        return summ;
    }, 0);
}
