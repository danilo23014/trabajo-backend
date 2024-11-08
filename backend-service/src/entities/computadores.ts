import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Computer } from "../entities/computadores";  

@Entity()
export class Computer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;
}

