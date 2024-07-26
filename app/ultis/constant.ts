import dotenv from "dotenv";
dotenv.config();

export const DB_STRING = process.env.DB as string;
