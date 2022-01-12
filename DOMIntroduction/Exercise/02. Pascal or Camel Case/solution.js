function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let result = apply(input, currentCase);

  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function apply(text, namingCase) {
    const switchConversation = {
      'Pascal Case': () => text
        .toLowerCase()
        .split(' ')
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(''),
      'Camel Case': () => text
        .toLowerCase()
        .split(' ')
        .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
        .join(''),
      default: () => 'Error!'
    };
    return (switchConversation[namingCase] || switchConversation.default)();
  }
}