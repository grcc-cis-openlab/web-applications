<article id="basic-js-prompt" class="example-section" markdown="1">
### EX.<span class="example-counter"></span> Basic JavaScript Prompt Dialog

The following is a very basic example of using the JavaScript `prompt()` function.

A prompt is a simple dialog used to convey something to a user (usually a question of some sort) along with a textbox into which a user can enter their response, and blocks any further interaction with the web page until it has been dismissed. The result of a prompt dialog will be a string representing whatever the user typed into the prompt's textbox.

```js
let response = prompt('Hello! How are you today?');
```

An initial value can be provided as a secondary, optional argument:

```js
let response = prompt('Hello! How are you today?', 'I am fine. Everything is fine...');
```

In the context of an otherwise empty HTML page:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Your Title Here</title>

    <link rel="stylesheet" type="text/css" href="your-styles.css">
</head>
<body>
    <script>
        let response = prompt('Hello! How are you today?');
        alert('You answered: ' + response);
    </script>
</body>
</html>
```

This example will display the user's response in an `alert()` - notice that the alert does not get called until the prompt is dismissed.
</article>