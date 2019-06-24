
function map(arr, func, _count=0, _new_arr=[]) {
    _new_arr[_count] = func(arr[_count]);
    return ++_count < arr.length ? map(arr, func, _count, _new_arr) : _new_arr; }


function reduce(arr, accum=0, _count=0){
    accum += arr[_count];
    return ++_count < arr.length ? reduce(arr, accum, _count) : accum; }


function filter(arr, predicate, _count=0, _new_arr=[]){
    if (predicate(arr[_count])) { _new_arr.push(arr[_count]); }
    return ++_count < arr.length ? filter(arr, predicate, _count, _new_arr) : _new_arr;
}


// ~~~~  test ~~~~
// let arr = [5,2,4];
// let func = (el) => { return el+1 };
// let predicate = (el) => { return el > 2 };
//
// console.log(map(arr, func));
// console.log(reduce(arr));
// console.log(filter(arr, predicate));
//
// console.log(arr);
