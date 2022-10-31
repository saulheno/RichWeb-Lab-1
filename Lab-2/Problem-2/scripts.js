var wordFreq = []; 
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  // .then(json => console.log(json.filter(titleLength)))
  .then ( json => json.filter(bodyCount))
  .then (_ => showResult())

function titleLength(json) {
  const titles = json.title
  const words = titles.split(" ")
  return words.length > 6
}

function bodyCount(json) {
  //console.log("body")
  const body = json.body

  const words = body.split(" ")
  words.filter(counting)
  //console.log(words)
}

function counting(word) {
  //console.log("count")
  //wordFreq = [['Hi', 1], ['There', 5]]
  if(word in wordFreq){
    wordFreq[word] = wordFreq[word] + 1
  } else {
    wordFreq[word] = 1
  }
}

function showResult() {
  const sorted = wordFreq.sort()
  console.log(wordFreq)
}