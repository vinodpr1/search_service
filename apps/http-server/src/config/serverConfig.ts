import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;

export {
  PORT,
};
