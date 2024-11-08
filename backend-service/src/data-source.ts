import "reflect-metadata";
import { DataSource } from "typeorm";
import { Computer } from "./entities/computadores"; 
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite", 
  synchronize: true, 
  logging: false, 
  entities: [Computer], 
  migrations: [],
  subscribers: []
});
