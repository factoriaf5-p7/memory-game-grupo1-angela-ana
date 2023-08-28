import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theme } from './interfaces/theme.interface';
import { CreateThemeDTO } from './dto/theme.dto';

@Injectable()
export class ThemeService {
  constructor(
    @InjectModel('Theme') private readonly themeModel: Model<Theme>,
  ) {}

  async findAll(): Promise<Theme[]> {
    const users = await this.themeModel.find();
    return users;
  }

  async findOne(id: string): Promise<Theme> {
    const user = await this.themeModel.findById(id);
    return user;
  }

  async create(createThemeDTO: CreateThemeDTO): Promise<Theme> {
    const theme = new this.themeModel(createThemeDTO);
    return await theme.save();
  }

  async delete(id: string): Promise<Theme> {
    const deletedTheme = await this.themeModel.findByIdAndDelete(id);
    return deletedTheme;
  }

  async update(id: string, createThemeDTO: CreateThemeDTO): Promise<Theme> {
    const updatedTheme = await this.themeModel.findByIdAndUpdate(
      id,
      createThemeDTO,
      { new: true },
    );
    return updatedTheme;
  }
}
