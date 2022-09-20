function findPair(arr, number) {
  let map = {},
    output = []
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] != null) {
      output[0] = map[arr[i]];
      output[1] = i;
      break;
    } else {
      map[number - arr[i]] = i;
      console.log(number - arr[i] + " " + map[number - arr[i]])
    }
  }
  return output;
}

console.log(findPair([10, 20, 40, 50, 70], 50))
