var words = [1,2,3,4,5,6,7,8,9,10]
var alphabetized = words.sort(function(word1, word2){
 return word2 > word1;
});
console.log(alphabetized);
