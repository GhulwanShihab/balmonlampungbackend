// src/galeri-foto/galeri-foto.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { GaleriFotoService } from './galeri-foto.service';
import { GaleriFoto } from '../entities/galeri-foto.entity';
import { CreateGaleriFotoDto } from './dto/create-galeri-foto.dto';
import { UpdateGaleriFotoDto } from './dto/update-galeri-foto.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('galeri-foto')
@ApiTags('galeri-foto')
export class GaleriFotoController {
  constructor(private readonly galeriFotoService: GaleriFotoService) {}

  @Post()
  async create(@Body() createGaleriFotoDto: CreateGaleriFotoDto): Promise<GaleriFoto> {
    return this.galeriFotoService.create(createGaleriFotoDto);
  }

  @Get()
  async findAll(): Promise<GaleriFoto[]> {
    return this.galeriFotoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<GaleriFoto> {
    return this.galeriFotoService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateGaleriFotoDto: UpdateGaleriFotoDto): Promise<GaleriFoto> {
    return this.galeriFotoService.update(id, updateGaleriFotoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.galeriFotoService.remove(id);
  }
}
