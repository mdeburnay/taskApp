// var diagonalSum = function (mat) {
//   let sum = 0;

//   for (let i = 0; i < mat.length; i++) {
//     sum += mat[i][i];

//     console.log(mat[i]);
//     console.log(i);
//     console.log(mat[i][i]);
//     console.log(mat.length - i - 1);
//     console.log(mat[i][mat.length - i - 1]);

//     if (i != mat.length - i - 1) {
//       sum += mat[i][mat.length - i - 1];
//     }
//   }

//   return sum;
// };

// console.log(
//   diagonalSum([
//     [1, 2, 3],
//     [4, 3, 6],
//     [7, 8, 9],
//   ])
// );

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 2, 3]);
    reject("Things went wrong!");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Success!", result);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
