async function fetchData() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/7');
      const json = await response.json();

      var table = '<table border=5>';
      table += '<tr><th>Key</th><th>Value</th></tr>';
      for (var key in json) {
          table += `<tr><td>${key}</td><td>${json[key]}</td></tr>`;
      }
      table += '</table>';

      document.getElementById('sample').innerHTML = table;
      return json;
  } catch (err) {
      console.log(err);
  }
}