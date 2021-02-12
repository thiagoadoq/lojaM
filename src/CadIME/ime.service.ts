import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { finished } from 'stream';
import { Ime } from './ime';

@Injectable()
export class ImeService {
  constructor(@InjectModel('imes') private imeModel: Model<Ime>) {}

  async newIme(ime: Ime): Promise<Ime> {
    const newime = new this.imeModel(ime);
    return newime.save();
  }

  async listIme(): Promise<Ime[]> {
    return await this.imeModel.find().exec();
  }

  async getIme(codIme: string): Promise<Ime> {
    return await this.imeModel.findOne({ codIme });
  }
}
