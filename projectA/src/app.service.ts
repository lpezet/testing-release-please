import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Changed Again And Again And Guess What...!';
  }
}
