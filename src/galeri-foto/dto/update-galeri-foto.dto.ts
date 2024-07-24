// src/galeri-foto/dto/update-galeri-foto.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateGaleriFotoDto {
  @IsOptional()
  @IsString()
  readonly judul?: string;

  @IsOptional()
  @IsString()
  readonly deskripsi?: string;

  @IsOptional()
  @IsString()
  readonly foto?: string;
}
