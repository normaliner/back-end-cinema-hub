import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getNewTokens(dto: RefreshTokenDto): Promise<{
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
}
