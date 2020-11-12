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

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => console.log(e));
//   })
//   .catch((e) => {
//     console.log(e);
//   });

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((e) => {
    console.log(e);
  });
