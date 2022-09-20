function findMajority(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] != null) {
      map[arr[i]] = map[arr[i]] + 1;
      if (map[arr[i]] > arr.length / 2) {
        return arr[i]
      }
    } else {
      map[arr[i]] = 1
    }
  }

}

let a = [2, 2, 2, 2, 5, 5, 2, 3, 3];

console.log(findMajority(a));
