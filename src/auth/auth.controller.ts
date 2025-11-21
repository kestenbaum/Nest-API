import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

interface UserPayloadFromStrategy {
  id: string;
  email: string;
  name: string;
}

interface UserRequest extends Request {
  user: UserPayloadFromStrategy;
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req: UserRequest) {
    return this.authService.login(req.user);
  }
}
