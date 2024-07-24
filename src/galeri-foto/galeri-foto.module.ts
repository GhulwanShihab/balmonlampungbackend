// src/galeri-foto/galeri-foto.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleriFoto } from '../entities/galeri-foto.entity';
import { GaleriFotoController } from './galeri-foto.controller';
import { GaleriFotoService } from './galeri-foto.service';

@Module({
  imports: [TypeOrmModule.forFeature([GaleriFoto])],
  controllers: [GaleriFotoController],
  providers: [GaleriFotoService],
})
export class GaleriFotoModule {}
