"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const genre_module_1 = require("./genre/genre.module");
const actor_module_1 = require("./actor/actor.module");
const review_module_1 = require("./review/review.module");
const movie_module_1 = require("./movie/movie.module");
const file_module_1 = require("./file/file.module");
const statistics_module_1 = require("./statistics/statistics.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), auth_module_1.AuthModule, user_module_1.UserModule, genre_module_1.GenreModule, actor_module_1.ActorModule, review_module_1.ReviewModule, movie_module_1.MovieModule, file_module_1.FileModule, statistics_module_1.StatisticsModule]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map