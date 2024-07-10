"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const argon2_1 = require("argon2");
const prisma_service_1 = require("../prisma.service");
const return_user_object_1 = require("./return-user.object");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id) {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                favourites: true
            }
        });
    }
    async getByEmail(email) {
        return this.prisma.user.findUnique({
            where: {
                email
            },
            include: {
                favourites: true
            }
        });
    }
    async create(dto) {
        const user = {
            name: dto.name,
            email: dto.email,
            password: await (0, argon2_1.hash)(dto.password)
        };
        return this.prisma.user.create({
            data: user
        });
    }
    async toggleFavoutite(movieId, userId) {
        const user = await this.getById(userId);
        const isExists = user.favourites.some(movie => movie.id === movieId);
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                favourites: {
                    set: isExists
                        ? user.favourites.filter(movie => movieId !== movie.id)
                        : [...user.favourites, { id: movieId }]
                }
            }
        });
    }
    async getAll(searchTerm) {
        if (searchTerm)
            return this.search(searchTerm);
        return this.prisma.user.findMany({
            select: return_user_object_1.returnUserObject,
            orderBy: {
                createdAt: 'desc'
            }
        });
    }
    async search(searchTerm) {
        return this.prisma.user.findMany({
            where: {
                OR: [
                    {
                        email: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        name: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        });
    }
    async update(id, dto) {
        return this.prisma.user.update({
            where: {
                id
            },
            data: dto
        });
    }
    async delete(id) {
        return this.prisma.user.delete({
            where: {
                id
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map