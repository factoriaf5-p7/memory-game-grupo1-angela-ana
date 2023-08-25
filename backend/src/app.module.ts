import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://memory:memory1234@clustertito.6d2esmg.mongodb.net/memory',
    ),
    UserModule,
    ThemeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
