import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Berita } from 'src/entities/berita.entity';
import { BeritaService } from './berita.service';
import { BeritaController } from './berita.controller';
import { Teks } from 'src/entities/teks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Berita, Teks])],
  providers: [BeritaService],
  controllers: [BeritaController],
})
export class BeritaModule {}