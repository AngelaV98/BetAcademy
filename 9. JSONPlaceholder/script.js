// https://jsonplaceholder.typicode.com/posts url ov fetch enq anum bolor poster@ ,
// arajin theni mej filtrum enq nenc vor erkrord then-i mej stananq menak en poster@
// voronc ham userId -n ham id-n zuyg en

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(res => {
    return res.filter(({ userId, id }) => {
      return !(userId % 2) && !(id % 2);
    });
  })
  .then(res => console.log(res));

// promise.all eq anum /users, /posts, /albums jsonner@, u veradardznum array,
// vor mej klini userner@ u amen useri mej klini ira postern u albomner@
function modify(users, posts, albums) {
  const newArr = users.map(user => {
    user.posts = posts.filter(post => {
      return post.userId === user.id;
    });
    user.albums = albums.filter(album => {
      return album.userId === user.id;
    });
    return user;
  });
  return newArr;
}
{
  const path = "https://jsonplaceholder.typicode.com";
  const urls = [`${path}/users`, `${path}/posts`, `${path}/albums`];

  Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(jsons => {
      console.log(modify(jsons[0], jsons[1], jsons[2]));
    });
}
///vercnum eq /albums u /photos jsonner@ u eli amen albomi tak sarqum eq url: []

function modify(albums, photos) {
  const newArr = albums.map(album => {
    album.urls = photos
      .filter(({ albumId }) => {
        return albumId === album.id;
      })
      .map(item => {
        return item.url;
      });
    return album;
  });
  return newArr;
}
{
  const path = "https://jsonplaceholder.typicode.com";
  const urls = [`${path}/albums`, `${path}/photos`];

  Promise.all(urls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(jsons => {
      console.log(modify(jsons[0], jsons[1], jsons[2]));
    });
}
