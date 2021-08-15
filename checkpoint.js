function dotProduct(v1, v2) {
  let doctProduct = 0;

  for (let i = 0; i < v1.length; i++) {
    dotProduct += v1[i] * v2[i];
  }

  return dotProduct;
}

dotProduct([2, 3], [3, -2]);
