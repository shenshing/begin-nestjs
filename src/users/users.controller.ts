import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<User> {
        return this.userService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateUserDto: CreateUserDto): Promise<User> {
        return this.userService.update(id, updateUserDto);
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.userService.login(loginUserDto);
    }




    // @Get()
    // findAll() {
    //     return 'get all users';
    // }

    // @Get(':id')
    // findOne(@Param() param): string {
    //     return `User ${param.id}`;
    // }

    // @Get(':id')
    // findOne(@Param('id') id): string {
    //     return `User ${id}`;
    // }

    // @Post()
    // create(@Body() createUserDto: CreateUserDto): string {
    //     return `Name: ${createUserDto.username} Password: ${createUserDto.password} ${createUserDto.email} Status: ${createUserDto.current_status} Date: ${createUserDto.created_at}`;
    // }

    // @Delete(':id')
    // delete(@Param('id') id): string {
    //     return `Delete ${id}`;
    // }

    // @Put(':id')
    // update(@Body() updateUserDto: CreateUserDto, @Param('id') id): string {
    //     return `Update ${id} - Name: ${updateUserDto.username}`;
    // }
}
