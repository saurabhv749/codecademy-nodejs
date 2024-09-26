const util = require("util");

// mock database query function
function getUser(id, callback) {
    return setTimeout(() => {
        if (id === 5) {
            callback(null, { nickname: 'Aaru', name: 'Arjun' });
        } else {
            callback(new Error("User not found"));
        }
    }, 1000);
}
const ID = 5;

// Old-school callback way
function callback(error, user) {
    if (error) {
        console.error(error.message);
        process.exit(1);
    }

    console.log(`User found! Their nickname is: ${user.nickname}`);
}

// getUser(1, callback); // -> `User not found`
getUser(ID, callback); //

// 🌟 My custom promisify
const promisify = (cb) => {
    return (id) => {
        return new Promise((res, rej) => {
            // cb (id,callback)
            cb(id, (err, data) => {
                if (err) {
                    return rej(err);
                }
                return res(data);
            });
        });
    };
};

const getUserPromiseCustom = promisify(getUser);

getUserPromiseCustom(ID)
    .then((user) => {
        console.log(`User found! Their nickname is: ${user.nickname}`);
    })
    .catch((error) => {
        console.log("User not found", error);
    });

// Using node utils
const getUserPromise = util.promisify(getUser);
getUserPromise(ID)
    .then((user) => {
        console.log(`User found! Their nickname is: ${user.nickname}`);
    })
    .catch((error) => {
        console.log("User not found", error);
    });
