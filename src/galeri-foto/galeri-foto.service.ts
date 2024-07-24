// src/galeri-foto/galeri-foto.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GaleriFoto } from '../entities/galeri-foto.entity';
import { CreateGaleriFotoDto } from './dto/create-galeri-foto.dto';

@Injectable()
export class GaleriFotoService {
  constructor(
    @InjectRepository(GaleriFoto)
    private readonly galeriFotoRepository: Repository<GaleriFoto>,
  ) {}

  // Membuat galeri foto baru
  create(createGaleriFotoDto: CreateGaleriFotoDto): Promise<GaleriFoto> {
    const galeriFoto = this.galeriFotoRepository.create(createGaleriFotoDto);
    return this.galeriFotoRepository.save(galeriFoto);
  }

  // Mendapatkan semua galeri foto
  findAll(): Promise<GaleriFoto[]> {
    return this.galeriFotoRepository.find();
  }

  // Mendapatkan galeri foto berdasarkan ID
  findOne(id: number): Promise<GaleriFoto> {
    return this.galeriFotoRepository.findOneBy({ id });
  }

  // Mengupdate galeri foto berdasarkan ID
  async update(id: number, updateGaleriFotoDto: Partial<CreateGaleriFotoDto>): Promise<GaleriFoto> {
    await this.galeriFotoRepository.update(id, updateGaleriFotoDto);
    return this.findOne(id);
  }

  // Menghapus galeri foto berdasarkan ID
  remove(id: number): Promise<void> {
    return this.galeriFotoRepository.delete(id).then(() => {});
  }
}
