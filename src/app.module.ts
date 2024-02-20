import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { LoggerMiddleware } from './logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';

const options: Record<string, string> = {
  environment: 'development',
};

@Module({
  controllers: [AppController],
  imports: [ConfigurationModule.register(options), UserModule],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
