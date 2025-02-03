/*
const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
    navigator.geolocation.getCurrentPosition(
        posData => {
            console.log(posData);
        },
        error => {
            setTimeout(() => {
                console.log(error);
            }, 2000);
        });
    console.log('Getting position...')
}

button.addEventListener('click', trackUserHandler);

let result = 0;

for (let i = 0; i < 600_000_000; i++) {
  result += i;
}

console.log(result);
*/

// ------------------------------------------------------

/*new Promise((resolve) => {
  console.log(1);
  resolve(2)
}).then(result => console.log(result));

console.log(3);*/

// ------------------------------------------------------

/*
const button = document.querySelector('button');
const output = document.querySelector('p');

const getCurrentPosition = (opts) => {
    return new Promise((resolve, reject) => {
       navigator.geolocation.getCurrentPosition(success => {
           resolve(success);
       }, error => {
           reject(error);
       }, opts);
   });
}

const setTimer = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, duration);
    });
};

function trackUserHandler() {
    let positionData;
    getCurrentPosition()
        .then(posData => {
            positionData = posData;
            return setTimer(2000);
        })
        .catch(data => console.log('error'))
        .then(data => {
            console.log(data, positionData);
        });
    setTimer(1000)
        .then(() => console.log('Timer done'));
    console.log('Getting position...')
}

button.addEventListener('click', trackUserHandler);
*/

// ------------------------------------------------------

const button = document.querySelector('button');
const output = document.querySelector('p');

const getCurrentPosition = (opts) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, error => {
            reject(error);
        }, opts);
    });
}

const setTimer = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, duration);
    });
};

/*async function trackUserHandler() {
    let posData;
    let timerData;
    try {
        posData = await getCurrentPosition();
        timerData = await setTimer(2000); // Done
    } catch (error) {
        console.log(error);
    }
    console.log(timerData, posData);
}*/


/*function trackUserHandler() {
    let posData;
    let timerData;
    try {
        Promise.race([
            getCurrentPosition(),
            setTimer(5000)
        ]).then(data => {
            console.log(data);
        })
    } catch (error) {
        console.log(error);
    }
    console.log(timerData, posData);
}*/

/*function trackUserHandler() {
    try {
        Promise.all([
            getCurrentPosition(),
            setTimer(1000)
        ]).then(combinedResult => {
            console.log(combinedResult);
        })
    } catch (error) {
        console.log(error);
    }
}*/

function trackUserHandler() {
    try {
        Promise.allSettled([
            getCurrentPosition(),
            setTimer(1000)
        ]).then(combinedResult => {
            console.log(combinedResult);
        })
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', trackUserHandler);





































