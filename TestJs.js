//var xhr = new XMLHttpRequest();
//xhr.open('Get,'https://jsonplaceholder.typicode.com/posts');
//xhr.send();

//var posts = {
//  post1: [
//    id: 1, 
//    title: "post number1",
//    "content": "My first pot, to be displayed"
//    "date": "24/06/2020"
//  ],
//   post2: "Mamalashvili"
//}
  
//var output =document.getElementById('output');
// output.innerHTML = posts.post2;

// let try this way
var url = 'https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3ef4ba32-d4d7-40b4-9869-a773616a43e3&q=president&fl=headline,web_url&begin_date=20171201&e nd_date=20180430&sort=newest.'

function setup () {
  noCanvas();
  loadJson(url, gotData);
}

function gotData(data) {
  var articles = data.response.docs;
  
  for (var i=0; i <articles.length; i++){
    //createImageBitmap(articles[i].headline.main);
    createElement('h1',articles[1].headline.main);
    createImageBitmap(articles[1].snippet);
  }

  //println(data.response.docs[0].headline.main);
}
    