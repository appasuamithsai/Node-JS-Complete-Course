const text = 'Hello WOrld Using Deno!';

const encoder = new TextEncoder();
const data = encoder.encode(text);

Deno.writeFile('message.txt', data).then(() => {
  console.log('Wrote into file Using Deno!');
});
