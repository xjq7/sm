import { Injectable } from '@nestjs/common';

@Injectable()
export class NginxService {
  findAll() {
    return `This action returns all nginx`;
  }
}
