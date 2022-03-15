const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error('Invalid args');
};

try {
  console.log(sum(1));
} catch (error) {
  console.log('Error !!!!');
  console.log(error);
}

console.log('This works!');
