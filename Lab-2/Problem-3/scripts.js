var profileName, avatarUrl, username, email, location, noGists, flag, reposUrl, repoName, repoDesc;
const search = document.querySelector(".searchButton"), searchText = document.querySelector(".search"), detailsTable = document.querySelector(".details-table"), repoTable = document.querySelector(".repo-table");
const api = 'https://api.github.com/users/';




search.addEventListener("click", () => {
    if(flag){
        detailsTable.innerHTML = ""
        repoTable.innerHTML = ""
    }
    userUrl = api.concat(document.getElementById("search").value);
    flag = true;
    fetch(userUrl)
        .then(response => response.json())
        .then(json => buildProfile(json))
});

function buildProfile(api) {
    profileName = api.name;
    avatarUrl = api.avatar_url;
    username = api.login;
    email = api.email; 
    local = api.location;
    noGists = api.public_gists;
    reposUrl = api.repos_url

    fetch(reposUrl)
        .then(response => response.json())
        .then(json => buildRepos(json))

    const profileTemplate = `
                            <div>
                                <h1>User Profile</h1>
                            </div>
                            <div class="avatar">
                                <img src="`+avatarUrl+`">
                            </div>
                            <div class="name">
                                <p>Name: `+profileName+` </p>
                            </div>
                            <div class="username">
                                <p>Username: `+username+` </p>
                            </div>
                            <div class="email">
                                <p>Email: `+email+` </p>
                            </div>
                            <div class="Location">
                                <p>Location: `+local+` </p>
                            </div>
                            <div class="gists">
                                <p>No. Of Gists: `+noGists+` </p>
                            </div>`;

    detailsTable.insertAdjacentHTML("beforeend", profileTemplate)
}

function buildRepos(api){
    
    console.log(api);
    const repoTitle = `  <div class="repoTitle">
                                <h1>User Repo's</h1>
                        </div>`
    repoTable.insertAdjacentHTML("beforeend", repoTitle)
    for(let i = 0; i < api.length; i++) {
        repoName = api[i].name
        repoDesc = api[i].description
        const repoTemplate = `  <div class="repo">
                                <h2>`+repoName+`</h2>
                                <p>`+repoDesc+`</p>
                            </div>`
        repoTable.insertAdjacentHTML("beforeend", repoTemplate)
    }
    
   
}