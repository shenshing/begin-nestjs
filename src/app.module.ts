import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../config/key';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
// import { ViewController } from './views/views.controller';
// import { ViewService } from './views/views.service';
// import { ViewService } from './view/view.service';
// import { ViewController } from './view/view.controller';
import { ViewsModule } from './view/view.module';


@Module({
  imports: [UsersModule, ViewsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
