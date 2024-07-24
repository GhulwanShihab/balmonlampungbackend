// src/galeri-video/dto/update-galeri-video.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateGaleriVideoDto {
  @IsOptional()
  @IsString()
  readonly judul?: string;

  @IsOptional()
  @IsString()
  readonly deskripsi?: string;

  @IsOptional()
  @IsString()
  readonly videoUrl?: string;
}
