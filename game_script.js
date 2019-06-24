var f = require('./Fitness');


function generate_world(arr) {
    return arr.map( (row) => { return row.map( () => { return Math.random() >= 0.5 ? 1:0; } ) })
}


function get_num_neigh (arr, i) {
    let row_i = Math.floor(i / arr.length);
    console.log(row_i);
    console.log( arr.slice(row_i-1, row_i+2) );

    console.log( arr[row_i].map( (x) => x.reduce( (acc, el) => { return acc + el; })) );

    return arr.slice(row_i-1, row_i+2).map( (x) => x.slice(i-1, i+1).reduce( (el1, el2) => { return el1+el2; }) ) - arr[i];
}

let n = 5;
let arr = new Array(n).fill(new Array(n).fill(0));
arr = generate_world(arr);

console.log(arr);
get_num_neigh(arr, 7);

console.log(get_num_neigh(arr, 7));


// console.log(generate_world(arr));

// arr = map(arr.keys(), get_num_neigh);

// https://github.com/LAnastasiia/game_script