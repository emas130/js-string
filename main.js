var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var upperCased = dinosaur.toUpperCase();

console.log(upperCased);

var newText = text.replace('Velociraptor',upperCased);

console.log(newText);
console.log(newText.length/2);

var subText = newText.substr(0,72);
console.log(subText);
