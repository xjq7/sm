import { Module } from '@nestjs/common';
import { NginxService } from './nginx.service.js';
import { NginxController } from './nginx.controller.js';

@Module({
  controllers: [NginxController],
  providers: [NginxService],
})
export class NginxModule {}
