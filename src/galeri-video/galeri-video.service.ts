import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GaleriVideo } from '../entities/galeri-video.entity';
import { CreateGaleriVideoDto } from './dto/create-galeri-video.dto';

@Injectable()
export class GaleriVideoService {
  constructor(
    @InjectRepository(GaleriVideo)
    private readonly galeriVideoRepository: Repository<GaleriVideo>,
  ) {}

  create(createGaleriVideoDto: CreateGaleriVideoDto): Promise<GaleriVideo> {
    const galeriVideo = this.galeriVideoRepository.create(createGaleriVideoDto);
    return this.galeriVideoRepository.save(galeriVideo);
  }

  findAll(): Promise<GaleriVideo[]> {
    return this.galeriVideoRepository.find();
  }

  findOne(id: number): Promise<GaleriVideo> {
    return this.galeriVideoRepository.findOneBy({ id });
  }

  async update(id: number, updateGaleriVideoDto: Partial<CreateGaleriVideoDto>): Promise<GaleriVideo> {
    await this.galeriVideoRepository.update(id, updateGaleriVideoDto);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.galeriVideoRepository.delete(id).then(() => {});
  }
}