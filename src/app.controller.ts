import { AppService } from './app.service';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greet/:username')
  getGreetings(@Param('username') username: string): string {
    return `Welcome ${username} !`;
  }

  @Get('number/:number')
  addTenToGivenNumber(@Param('number', ParseIntPipe) number: number): number {
    return number + 10;
  }
}
