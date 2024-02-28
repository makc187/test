function bla(){
const divBla = document.getElementById('bla');
  var timestamp = (new Date()).getTime();
  fetch(`bla.txt?timestamp=${timestamp}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      return response.text();
    })
    .then(textContent => {
      const formattedText = textContent.replace(/\n/g, '<br>');
      divBla.innerHTML = formattedText;
    })
    .catch(error => {
      console.error(error.message);
    });
}
