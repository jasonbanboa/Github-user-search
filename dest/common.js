"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUserData(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const { avatar_url, name, login, created_at, bio, public_repos, followers, following, location, twitter_username, blog, company, } = yield fetch(`https://api.github.com/users/${username}`).then(res => res.json());
        return {
            avatar_url,
            name,
            login,
            created_at,
            bio,
            public_repos,
            followers,
            following,
            location,
            twitter_username,
            blog,
            company,
        };
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield fetchUserData('octocat');
        console.log(userData || 'error');
    });
}
main();
