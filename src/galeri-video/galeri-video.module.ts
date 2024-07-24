// src/galeri-video/galeri-video.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleriVideo } from '../entities/galeri-video.entity';
import { GaleriVideoController } from './galeri-video.controller';
import { GaleriVideoService } from './galeri-video.service';

@Module({
  imports: [TypeOrmModule.forFeature([GaleriVideo])],
  controllers: [GaleriVideoController],
  providers: [GaleriVideoService],
})
export class GaleriVideoModule {}
