import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Ime } from './ime';
import { ImeService } from './ime.service';

@Controller('imes')
export class ImesController {
  constructor(private readonly imesService: ImeService) {}

  @Post()
  async creat(@Body() ime: Ime): Promise<Ime> {
    return this.imesService.newIme(ime);
  }

  @Get(':codIme')
  async getIme(@Param('codIme') codIme: string): Promise<Ime> {
    return await this.imesService.getIme(codIme);
  }
}
