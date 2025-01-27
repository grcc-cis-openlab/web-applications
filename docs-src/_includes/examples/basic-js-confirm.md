<article id="basic-js-confirm" class="example-section" markdown="1">
### EX.<span class="example-counter"></span> Basic JavaScript Confirm Dialog

The following is a very basic example of using the JavaScript `confirm()` function.

A confirm is a simple dialog used to convey something to a user (usually a question of some sort), and blocks any further interaction with the web page until it has been dismissed. The result of a confirm dialog will be `true` or `false`.

```js
let confirmed = confirm('Do the thing?');
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
        let confirmed = confirm('Do the thing?');
        alert('Confirmed? ' + confirmed);
    </script>
</body>
</html>
```

This example will display the user's choice in an `alert()` - notice that the alert does not get called until the confirm is dismissed.
</article>