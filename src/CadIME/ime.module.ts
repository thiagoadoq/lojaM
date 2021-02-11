import { ImesController } from './imes.controller';
import { ImeService } from './ime.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ImesController],
  providers: [ImeService],
})
export class ImeModule {}
