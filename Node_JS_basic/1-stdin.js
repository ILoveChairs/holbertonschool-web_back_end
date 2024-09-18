console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('name', (name) => process.stdout.write(`Your name is: ${name}`));

process.stdin.on('pepe', () => console.log('This important software is now closing'));
