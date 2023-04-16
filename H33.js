'use strict';

document.querySelector('#submit').addEventListener('click', event => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const birth = document.getElementById('birth').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.getElementById('city').value;
  const adress = document.getElementById('adress').value;
  const languages = document.querySelectorAll('input[name="languages"]:checked');
  
  const language = [];
    for (let i = 0; i < languages.length; i++) {
      language.push(languages[i].value);
    }

  const table = document.createElement('table');
  table.innerHTML = `
      <tr>
          <td>Name</td>
          <td>${name}</td>
      </tr>
      <tr>
          <td>Surname</td>
          <td>${surname}</td>
      </tr>
      <tr>
          <td>Birth</td>
          <td>${birth}</td>
      </tr>
      <tr>
          <td>Gender</td>
          <td>${gender}</td>
      </tr>
      <tr>
          <td>City</td>
          <td>${city}</td>
      </tr>
      <tr>
          <td>Adress</td>
          <td>${adress}</td>
      </tr>
      <tr>
          <td>Language</td>
          <td>${language.join(', ')}</td>
      </tr>
  `;
  document.body.replaceWith(table);
});
