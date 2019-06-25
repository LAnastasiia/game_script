let sum = (a,b) => { return a+b; };


function generate_world(arr)
    { return arr.map( (row) => { return row.map( () => { return Math.random() >= 0.8 ? 1:0; } ) }) }

// function setup_world(arr, live_i_arr)
//     { return arr.forEach( (row)=>{ return row.map( (el)=>{ return (el.key in live_i_arr) ? 1:0; } );} );}

function get_num_neigh (arr, i) {

    let row_i = Math.floor(i / arr.length),             col_i = i % arr.length;
    let row_bot = row_i > 0 ? row_i-1:row_i;               let i_left = col_i > 0 ? col_i-1:col_i;
    let row_top = row_i < arr.length ? row_i+2:row_i;      let i_right = col_i < arr.length-1 ? col_i+2:col_i;

    return arr.slice(row_bot, row_top).map( (x) => {  return x.slice(i_left, i_right).reduce(sum); }).reduce(sum) - arr[row_i][col_i];
}


let n = 7;
let arr = new Array(n).fill(new Array(n).fill(0));

arr = generate_world(arr);

next_arr = new Array(n).fill(new Array(n).fill(0));

for (let row=0; row < n; row++){
    console.log(arr.indexOf(arr[row]));
    for (let j=0; j<n; j++){
        console.log(Array(arr[row].length).keys());
        let num_neigh = get_num_neigh(arr, row*n+j);
        next_arr[row][j] = (2 <= num_neigh && num_neigh <= 4) ? 1:0;
    }
}
console.log(next_arr);

// https://github.com/LAnastasiia/game_script