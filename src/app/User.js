export class User {

    login = '';
    avatar_url = '';
    bio = null;
    email = null;
    repos_url = '';
    public_repos = null;

    repos = [];

    constructor(userData) {
        Object.assign(this, userData)
    }


    populate() {

    }

}