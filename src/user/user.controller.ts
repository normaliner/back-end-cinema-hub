import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from './decorators/user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id);
	}

	@Post('profile/favourites')
	@HttpCode(200)
	@Auth()
	async toggleFavoutite(
		@Body('movieId') movieId: string,
		@CurrentUser('id') userId: string
	) {
		return this.userService.toggleFavoutite(movieId, userId);
	}

	/* Запросы для админа */
	@Get()
	@Auth('admin')
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.userService.getAll(searchTerm);
	}

	@Get('by-id/:id')
	@Auth('admin')
	async getById(@Param('id') id: string) {
		return this.userService.getById(id);
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@Auth('admin')
	async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
		const updateUser = await this.userService.update(id, dto);
		if (!updateUser) throw new NotFoundException('Пользователь не найден');
		return updateUser;
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id') id: string) {
		const deleteUser = await this.userService.delete(id);
		if (!deleteUser) throw new NotFoundException('Пользователь не найден');
		return deleteUser;
	}
}
