import { Get, Injectable, Render } from '@nestjs/common';
// import HomePage from './display/home';

@Injectable()
export class ViewsService {

    @Get()
    @Render('home')
    home(): string {
        return 'inside home view.service';
    }
}
