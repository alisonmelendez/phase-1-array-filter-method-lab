// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, specificNames) {
    const result = drivers.filter(driver =>
        (driver.toLowerCase() === specificNames.toLowerCase()));


    console.log(result);

    return result;

}

function fuzzyMatch(drivers, letters) { //, letter
    const result = drivers.filter(driver => {

        if (driver.indexOf(letters) === 0) { //for element driver, if the indexOf the given letter is 0 (found)
            return driver;
            //if the index is greater than -1 (meaning it exists) return it!
            //return driver;
        }


    });

    return result;

}

const drivers = [{
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function matchName(drivers, name) {
    const result = drivers.filter(driver => {
        if (driver.name === name) {
            //console.log(driver)
            return driver;
        }
    })
    return result;
}

matchName(drivers, 'Bobby')