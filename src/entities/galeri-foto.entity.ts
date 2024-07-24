// src/entities/galeri-foto.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GaleriFoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judul: string;

  @Column()
  foto: string;
}
