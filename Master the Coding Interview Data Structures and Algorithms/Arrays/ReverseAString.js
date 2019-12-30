function reverse(str){
  if (!str || str.length < 2 || typeof str !== 'string'){
    return 'hmm that is not good';
  }
  const backwards = [];
  const totalItems = str.length -1;
  for (let i = totalItems; i>=0; i--){
    backwards.push(str[i]);
  }
  return backards.join('');
}

function reverse2(str){
  return str.split('').reverse().join('')
}

// arroy function 
function reverse3 = str => str.split('').reverse().join('');

// spread operator.
function reverse4 = str => [...str].reverse().join('');
