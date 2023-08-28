import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDTO } from './dto/theme.dto';

@Controller('theme')
export class ThemeController {
  constructor(private themeService: ThemeService) {}

  @Get()
  findAll() {
    return this.themeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themeService.findOne(id);
  }

  @Post()
  async create(@Body() createThemeDTO: CreateThemeDTO) {
    return await this.themeService.create(createThemeDTO);
  }

  @Delete(':id')
  delete(@Res() res, @Param('id') id: string) {
    const deletedProject = this.themeService.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Theme deleted successfully',
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createThemeDTO: CreateThemeDTO,
  ) {
    const updatedTheme = await this.themeService.update(id, createThemeDTO);
    if (!updatedTheme) throw new NotFoundException('Project not found');
    return updatedTheme;
  }
}
