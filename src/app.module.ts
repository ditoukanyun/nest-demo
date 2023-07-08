import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ParamController } from './controller/params/param.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ParamController],
  providers: [AppService],
})
export class AppModule {}
