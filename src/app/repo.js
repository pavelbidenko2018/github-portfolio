export class Repo {
    id = null;
    name = '';
    homepage = '';
    html_url = '';
    fork = false;
    created_at = new Date();

    constructor(repoData) {
        Object.assign(this, repoData);
    }

    render() {
        const repo = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.innerHTML = this.name;

        const anchor_www = document.createElement('a');
        anchor_www.innerHTML = `homepage: ${this.homepage}`;
        anchor_www.href = this.homepage;

        const anchor_github = document.createElement('a');
        anchor_github.innerHTML = `gitHub: ${this.html_url}`;
        anchor_github.href = this.html_url;

        repo.appendChild(h3);
        repo.appendChild(anchor_www);

        repo.appendChild(anchor_github);
        return repo;

    }

}