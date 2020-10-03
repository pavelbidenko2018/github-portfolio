import { Repo } from "./repo.js";

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

        return fetch(this.repos_url)
            .then(res => res.json())
            .then(repoData => {
                repoData.forEach(repo => this.repos.push(new Repo(repo)));
                this.repos.sort((a, b) => (Date.parse(b.created_at) - Date.parse(a.created_at)));
                return this;
            })
            .then(preparedRepoData => {
                preparedRepoData.render();
                preparedRepoData.repos.forEach(item => console.log(item))

            })
            .catch(err => console.log(err));
    }

    render() {

        const img = document.createElement('img');
        img.src = this.avatar_url;

        const h1 = document.createElement('h1');
        h1.innerHTML = this.login;

        const h2 = document.createElement('h2');
        h2.innerHTML = `${this.bio}`;

        const user_info = document.getElementById('user_info');
        user_info.appendChild(h1);
        user_info.appendChild(img);
        user_info.appendChild(h2);

        const repo_holder = document.getElementById('repo_holder');

        this.repos.forEach(item => {
            repo_holder.appendChild(item.render());
        })

    }

}