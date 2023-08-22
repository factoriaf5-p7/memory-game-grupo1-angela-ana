import { Injectable } from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import * as data from '../../data/data.json';

@Injectable()
export class ThemeService {
  create(createThemeDto: CreateThemeDto) {
    return 'This action adds a new theme';
  }

  findAll() {
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} theme`;
  }

  update(id: number, updateThemeDto: UpdateThemeDto) {
    return `This action updates a #${id} theme`;
  }

  remove(id: number) {
    return `This action removes a #${id} theme`;
  }
}
