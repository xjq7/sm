import { Controller, Get } from '@nestjs/common';
import path from 'path';
import { NginxService } from './nginx.service.js';
import { execa } from 'execa';
import fs from 'fs';
import * as file from '../utils/file.js';

const root = 'C:\\soft\\nginx-1.24.0';

@Controller('nginx')
export class NginxController {
  constructor(private readonly nginxService: NginxService) {}

  @Get()
  async findAll() {
    try {
      const res = await execa('./nginx.exe', ['-V'], {
        cwd: 'C:\\soft\\nginx-1.24.0',
        all: true,
      });
      console.log(res.all);
    } catch (error) {
      console.log(error);
    }

    return this.nginxService.findAll();
  }

  @Get('logs')
  async logs() {
    try {
      const res = await file.read(path.join(root, '/logs/access.log'), {
        start: 1,
        end: 2,
        limit: 10,
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  @Get('conf')
  async getConf() {
    try {
      const res = fs.readFileSync(path.join(root, '/conf/nginx.conf'), 'utf8');
      return res;
    } catch (error) {}
  }
}
