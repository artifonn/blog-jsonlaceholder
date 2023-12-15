async function readPosts() {
  let postArea = document.querySelector('.posts');

  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let json = await response.json();
  if (json.length > 0) {
    for (let i of json) {
      let newTitle = i.title;
      let newBody = i.body;

      let container = document.createElement('div');
      container.classList.add('container');

      let titleElement = document.createElement('h2');
      let bodyElement = document.createElement('p');

      titleElement.innerHTML = newTitle;
      bodyElement.innerHTML = newBody;

      container.appendChild(titleElement);
      container.appendChild(bodyElement);
      postArea.appendChild(container);
    }
  } else {
    postArea.innerHTML = 'Nenhum post para exibir';
  }
}

readPosts();
