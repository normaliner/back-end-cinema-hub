import { UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
	@IsString()
	name: string;

	@IsEmail()
	email: string;

	@MinLength(6, { message: 'Пароль должен содержать не менее 6 символов!' })
	@IsString()
	password: string;

	@IsEnum(UserRole)
	role: UserRole;
}
