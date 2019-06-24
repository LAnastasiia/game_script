let sum = (a,b) => { return a+b; };


function generate_world(arr)
    { return arr.map( (row) => { return row.map( () => { return Math.random() >= 0.5 ? 1:0; } ) }) }

function get_num_neigh (arr, i) {

    let row_i = Math.floor(i / arr.length);
    let row_top = row_i > 0 ? row_i+2:row_i,           row_bot = row_i < arr.length ? row_i-1:row_i;
    let i_left = i > 0 ? i-arr.length-1:i,             i_right = i / arr.length > 1 ? i-arr.length+2:i;

    return arr.slice(row_bot, row_top).map( (x) => {  return x.slice(i_left, i_right).reduce(sum); }).reduce(sum) - arr[row_i][i-arr.length];
}

let n = 5, arr = new Array(n).fill(new Array(n).fill(0));
arr = generate_world(arr);
console.log(arr);
console.log(get_num_neigh(arr, 7));

next_arr = new Array(n).fill(new Array(n).fill(0));
console.log(next_arr);

for (let row=0; row < n; row++){
    for (let j=0; j<n; j++)
    next_arr[row][j] = 1 < get_num_neigh(arr, row*n+j) < 4 ? 1:0;
}
console.log(next_arr);

// add_arr = arr_neigh.filter( (x)=>{ return 1 < x < 4; } );
// del_arr = arr_neigh.filter( (x)=>{ return x < 1 || x > 4; } );

// https://github.com/LAnastasiia/game_script