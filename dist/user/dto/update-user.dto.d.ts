import { UserRole } from '@prisma/client';
export declare class UpdateUserDto {
    name: string;
    email: string;
    role: UserRole;
}
