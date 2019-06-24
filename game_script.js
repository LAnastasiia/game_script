let sum = (a,b) => { return a+b; };


function generate_world(arr)
    { return arr.map( (row) => { return row.map( () => { return Math.random() >= 0.5 ? 1:0; } ) }) }

function get_num_neigh (arr, i) {
    let row_i = Math.floor(i / arr.length);
    return arr.slice(row_i-1, row_i+2).map( (x) => {  return x.slice(i-arr.length-1, i-arr.length+2).reduce(sum); }).reduce(sum) - arr[row_i][i-arr.length];
}


let n = 5, arr = new Array(n).fill(new Array(n).fill(0));
arr = generate_world(arr);
console.log(arr);
console.log(get_num_neigh(arr, 7));

// arr_neigh = new Array(n).fill(new Array(n).fill(0));
arr_neigh = arr.map( (x)=> { return x.map(); } )
// ... assign get_num_neigh()

add_arr = arr_neigh.filter( (x)=>{ return 1 < x < 4; } );
del_arr = arr_neigh.filter( (x)=>{ return x < 1 || x > 4; } );

// https://github.com/LAnastasiia/game_script