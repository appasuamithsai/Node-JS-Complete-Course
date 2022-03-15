const fs = require('fs').promises;

const text = 'Hello World Using Node!!!';

fs.writeFile('node-message.txt', text).then(() => {
  console.log('Wrote into file using Node !');
});
