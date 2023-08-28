import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    ThemeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
