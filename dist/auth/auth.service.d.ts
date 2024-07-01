import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private userService;
    private jwt;
    constructor(userService: UserService, jwt: JwtService);
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            role: import(".prisma/client").$Enums.UserRole;
            isHasPremium: boolean;
        };
    }>;
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            favourites: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                slug: string;
                poster: string;
                bigPoster: string;
                year: number;
                duration: number;
                country: string;
                views: number;
                videoUrl: string;
                userId: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            role: import(".prisma/client").$Enums.UserRole;
            isHasPremium: boolean;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            favourites: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                slug: string;
                poster: string;
                bigPoster: string;
                year: number;
                duration: number;
                country: string;
                views: number;
                videoUrl: string;
                userId: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            role: import(".prisma/client").$Enums.UserRole;
            isHasPremium: boolean;
        };
    }>;
    private issueTokens;
    private validateUser;
}
