import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log('Escute');
  console.log(`CTRL + Clique http://localhost:${port}`);
});
