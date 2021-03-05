import { Module } from '@nestjs/common';
// import { UsersController } from './users.controller';
import { UsersService } from '../users/users.service';
import { ViewsController } from './view.controller';
import { ViewsService } from './view.service';
import { UserSchema } from '../users/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [ViewsController],
    providers: [ViewsService, UsersService],
})

export class ViewsModule { }
