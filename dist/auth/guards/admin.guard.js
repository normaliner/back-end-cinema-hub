"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyAdminGuard = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let OnlyAdminGuard = class OnlyAdminGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (user.role !== client_1.UserRole.ADMIN)
            throw new common_1.ForbiddenException('У вас недостаточно прав для выполения этой операции');
        return true;
    }
};
exports.OnlyAdminGuard = OnlyAdminGuard;
exports.OnlyAdminGuard = OnlyAdminGuard = __decorate([
    (0, common_1.Injectable)()
], OnlyAdminGuard);
//# sourceMappingURL=admin.guard.js.map