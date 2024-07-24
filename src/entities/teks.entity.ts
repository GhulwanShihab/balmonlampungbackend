import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Berita} from './berita.entity';



@Entity('teks')
export class Teks {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text')
    str: string
    @Column('int')
    order: number;
    @ManyToOne(() => Berita, berita => berita.deskripsiBerita, {nullable: true, onDelete:"CASCADE"})
    berita: Berita;
}