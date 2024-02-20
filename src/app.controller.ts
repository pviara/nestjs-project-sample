import { AppService } from './app.service';
import { ConfigurationService } from './configuration/configuration.service';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { User } from './user/model/user';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigurationService,
    private userService: UserService,
  ) {}

  @Get('number/:number')
  addTenToGivenNumber(@Param('number', ParseIntPipe) number: number): number {
    return number + 10;
  }

  @Get('environment')
  getEnvironment(): string {
    return this.configService.getValue('environment');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/:username')
  getUser(@Param('username') username: string): User {
    return this.userService.getUser(username);
  }
}
