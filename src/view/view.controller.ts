import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from '../users/users.service';
// import { ViewService } from './views.service';
// import { User } from '../users/interface/user.interface';

@Controller('view')
export class ViewsController {
    constructor(private readonly userService: UsersService) { }

    @Get('/home')
    @Render('display/home')
    home() {
        // return ' inside view controller';
        return this.userService.findAll();
    }

    @Get('/login')
    @Render('display/login')
    login() {
        return this.userService.findAll();
    }

    @Get('/profile')
    @Render('display/profile')
    profile() {
        return this.userService.findAll();
    }
}
