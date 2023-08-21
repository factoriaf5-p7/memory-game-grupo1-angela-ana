import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ThemesModule } from './themes/themes.module';

@Module({
  imports: [UserModule, ThemesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
