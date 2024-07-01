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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const argon2_1 = require("argon2");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService, jwt) {
        this.userService = userService;
        this.jwt = jwt;
    }
    async register(dto) {
        const oldUser = await this.userService.getByEmail(dto.email);
        if (oldUser)
            throw new common_1.BadRequestException('Пользователь уже сущетсвует');
        const user = await this.userService.create(dto);
        const tokens = this.issueTokens(user.id);
        return {
            user,
            ...tokens
        };
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        const tokens = this.issueTokens(user.id);
        return {
            user,
            ...tokens
        };
    }
    async getNewTokens(refreshToken) {
        const result = await this.jwt.verify(refreshToken);
        if (!result)
            throw new common_1.UnauthorizedException('Невалидный refresh токен');
        const user = await this.userService.getById(result.id);
        const tokens = this.issueTokens(user.id);
        return {
            user,
            ...tokens
        };
    }
    issueTokens(userId) {
        const data = { id: userId };
        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h'
        });
        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d'
        });
        return { accessToken, refreshToken };
    }
    async validateUser(dto) {
        const user = await this.userService.getByEmail(dto.email);
        if (!user)
            throw new common_1.NotFoundException('Пользователь не найден');
        const isValidPassword = await (0, argon2_1.verify)(user.password, dto.password);
        if (!isValidPassword)
            throw new common_1.UnauthorizedException('Неверный пароль');
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map