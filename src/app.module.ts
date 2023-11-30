import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { NginxModule } from './nginx/nginx.module.js';

@Module({
  imports: [NginxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
