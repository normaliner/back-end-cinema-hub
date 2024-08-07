import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<{
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
    getByEmail(email: string): Promise<{
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
    create(dto: AuthDto): Promise<{
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
    toggleFavoutite(movieId: string, userId: string): Promise<void>;
    getAll(searchTerm?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        name: string;
        avatarPath: string;
        role: import(".prisma/client").$Enums.UserRole;
        isHasPremium: boolean;
    }[]>;
    private search;
    update(id: string, dto: UpdateUserDto): Promise<{
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
    delete(id: string): Promise<{
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
