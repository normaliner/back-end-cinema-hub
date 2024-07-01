import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: string;
    }): Promise<{
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
    }>;
}
export {};
