const APIURL = "https://api.github.com/users/";

const main = document.querySelector(".main");
const userInput = document.querySelector('#input');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', githubResponse);

async function githubResponse(e) {
    e.preventDefault();
    const res = await fetch(APIURL + userInput.value);
    const resData = await res.json();

    getDesign(resData);
    
}

function getDesign(resData) {

    let html = `<div class="left-content">
                    <img src="${resData.avatar_url}" alt="" id="img">
                </div>

                <div class="right-content">
                    <h2  id="name">${resData.name}</h2>
                    <p id="bio">${resData.bio}</p>
                    <p id="website"><a href="${resData.blog}" target="__blank">${resData.blog}</a></p>

                    <ul>
                        <li>${resData.followers}<span>followers</span></li>
                        <li>${resData.following}<span>following</span></li>
                        <li>${resData.public_repos}<span>repo</span></li>
                    </ul>
                </div> `

    main.innerHTML = html;
}

