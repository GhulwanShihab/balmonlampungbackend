// src/galeri-video/galeri-video.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GaleriVideoService } from './galeri-video.service';
import { GaleriVideo } from '../entities/galeri-video.entity';
import { CreateGaleriVideoDto } from './dto/create-galeri-video.dto';
import { UpdateGaleriVideoDto } from './dto/update-galeri-video.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('galeri-video')
@ApiTags('galeri-video')
export class GaleriVideoController {
  constructor(private readonly galeriVideoService: GaleriVideoService) {}

  @Post()
  async create(@Body() createGaleriVideoDto: CreateGaleriVideoDto): Promise<GaleriVideo> {
    return this.galeriVideoService.create(createGaleriVideoDto);
  }

  @Get()
  async findAll(): Promise<GaleriVideo[]> {
    return this.galeriVideoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<GaleriVideo> {
    return this.galeriVideoService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateGaleriVideoDto: UpdateGaleriVideoDto): Promise<GaleriVideo> {
    return this.galeriVideoService.update(id, updateGaleriVideoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.galeriVideoService.remove(id);
  }
}
