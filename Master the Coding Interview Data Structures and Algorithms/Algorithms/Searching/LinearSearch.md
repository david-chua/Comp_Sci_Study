# Linear Search

Going through the entire list one item at a time.
- Time complexity: O(n).

````
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item){
  return item === 'Godzilla';
  });

beasts.find(function(item){
  return item === 'Godzilla';
  })

beasts.includes('Godzilla');

````
