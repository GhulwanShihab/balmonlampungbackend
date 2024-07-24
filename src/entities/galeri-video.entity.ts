// src/entities/galeri-video.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GaleriVideo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  judul: string;

  @Column()
  video: string;
}
