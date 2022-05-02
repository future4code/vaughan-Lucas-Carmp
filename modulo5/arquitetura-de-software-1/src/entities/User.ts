import { USER_ROLES } from "../data/UserDatabase";

export class User {
    constructor(
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ){}
}