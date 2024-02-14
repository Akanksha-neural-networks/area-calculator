import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreaModule } from './area/area.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AreaModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
