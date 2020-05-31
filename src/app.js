import express from "express";

const PORT = 3000;
const app = express();

const gugudan = () => {
  for (let i = 2; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(i + " X " + j + " = " + i * j);
    }
  }
};

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);

  gugudan();
});
