import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

const options: Record<string, string> = {
  environment: 'development',
};

@Module({
  controllers: [AppController],
  imports: [ConfigurationModule.register(options), UserModule],
  providers: [AppService],
})
export class AppModule {}
