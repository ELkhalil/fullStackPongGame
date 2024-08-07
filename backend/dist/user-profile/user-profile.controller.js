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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileController = void 0;
const common_1 = require("@nestjs/common");
const user_profile_service_1 = require("./user-profile.service");
const access_guard_1 = require("../auth/Guards/access.guard");
const getCurrentUser_decorator_1 = require("../auth/decorators/getCurrentUser.decorator");
let UserProfileController = class UserProfileController {
    constructor(userProfileService) {
        this.userProfileService = userProfileService;
    }
    async getMyProfile(userId) {
        return await this.userProfileService.getMyProfile(userId);
    }
};
exports.UserProfileController = UserProfileController;
__decorate([
    (0, common_1.UseGuards)(access_guard_1.AtGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, getCurrentUser_decorator_1.GetCurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "getMyProfile", null);
exports.UserProfileController = UserProfileController = __decorate([
    (0, common_1.Controller)('user-profile'),
    __metadata("design:paramtypes", [user_profile_service_1.UserProfileService])
], UserProfileController);
//# sourceMappingURL=user-profile.controller.js.map