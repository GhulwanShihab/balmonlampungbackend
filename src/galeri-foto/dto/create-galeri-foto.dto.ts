// src/galeri-foto/dto/create-galeri-foto.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGaleriFotoDto {
  @IsString()
  @IsNotEmpty()
  judul: string;

  @IsString()
  @IsNotEmpty()
  foto: string;
}
