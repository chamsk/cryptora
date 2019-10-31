var http = require('http');
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(` 
   <!doctype>
   <html>
   <head>
      <meta charset="utf-8">
      <title>
	  </title>
   </head>
   <body>
		<input type="text" id="input"/>
		<div><button id="btn" onclick="show()" >click</button></div>
		<div><span id="output"></span></div>
		<script>
				function show(){
					 var input = document.getElementById('input').value;
					 document.getElementById('output').innerHTML = input;
				};
		</script>
   </body>
   </html> 
   `);
}).listen(3000);
    browser.get('http://127.0.0.1:3000/');
	browser.findElement(webdriver.By.id('input')).sendKeys('aloha');
	browser.findElement(webdriver.By.id('btn')).click();
