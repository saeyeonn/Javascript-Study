## Javascript-Study

JavaScript will allow us to run code on the client side, meaning no interaction with the server is necessary while it’s running, allowing our websites to become much more interactive.

<br>
<br>

### JS in seperate file

<br>

- Visual appeal : Individual HTML and JS files become more readable.

- Access among HTML files : We can have multiple HTML files that all share same JS.

- Collaboration : We can easily have one person work on JS while another works on HTML.

- Import : We are able to import JS libs that other people have aloready written. (e.g. Bootstrap)

<br>
<br>

### JavaScript Console

<br>

- Useful tool for testing out small bits of code and debugging.

- We can find write and run JS code in console, which can be found by inspecting element in web brower then clicking console.

- Printing to consol is an useful tool for debugging.

<br>

```javascript
// EX - can print all by selecting all buttons in page

console.log(document.querySelectorAll('button'));
```

<br>
<br>

### JavaScript Object & API

<br>

- Useful in transferring data from one site to another, particularly when using APIs.
- JSON : JavaScript Object Notation
- API is a structured form communication between two different applications.
- We can get information from services by making calls to a service’s API, which will return structured data to us, often in JSON form.

<br>

```javascript
{
    "origin": {
        "city": "New York",
        "code": "JFK"
    },
    "destination": {
        "city": "London",
        "code": "LHR"
    },
    "duration": 415
}
```

<br>
<br>

### AJAX - Asynchronous JavaScript And XML

<br>

- Allows to access information from external pages even after our page has loaded.
- We can make requests to servers without having to reload the page.
- We use fetch function which will allow us to send HTTP request.
- Fetch function returns a promise.
- Promise can be thought as a value that will come through at some point but not necessarily right away.

<br>
<br>

### Page Switching

<br>

- Load just single page and then use JS to manipulate DOM
- Use JS to change the content of the page without having to reload the page.
- Only need to modify part of the page that is actually changing.

<br>
<br>

### 

<br>

- 