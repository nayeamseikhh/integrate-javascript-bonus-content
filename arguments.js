// function getFullName(){
//     console.log(arguments);

// }

// const name = getFullName("omuk", "songket", "bit", "tomuk", "songket", "Bin", "hanif", "songket");

function getFullName(){
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + " " + namePart;
    }
    return fullName;
}

const name = getFullName("omuk", "songket", "bit", "tomuk", "songket", "Bin", "hanif", "songket");
console.log(name);