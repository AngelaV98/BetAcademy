loadMore(1)
  .then(res => res.json())
  .then(users => {
    const container = document.getElementById("users");
    users.forEach(({ login, avatar_url, html_url }) => {
      const user = document.createElement("div");
      user.classList.add("user");
      const img = document.createElement("img");
      img.src = avatar_url;
      const link = document.createElement("a");
      link.href = html_url;
      link.appendChild(img);
      user.appendChild(link);
      container.appendChild(user);
    });
    const loadButton = document.createElement("button");
    loadButton.type = "button";
    loadButton.textContent = "Load more";
    loadButton.onclick = ()=>loadMore(10);
    document.querySelector("body").appendChild(loadButton);
  })
  .catch(err => console.log(err));

function loadMore(since) {
  return fetch(`https://api.github.com/users?since=${since}`);
}
