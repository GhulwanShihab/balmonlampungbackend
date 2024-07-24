// src/galeri-video/dto/create-galeri-video.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGaleriVideoDto {
  @IsString()
  @IsNotEmpty()
  judul: string;

  @IsString()
  @IsNotEmpty()
  video: string;
}
