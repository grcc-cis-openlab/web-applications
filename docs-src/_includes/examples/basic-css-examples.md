<article id="basic-css-examples" class="example-section" markdown="1">
### EX.<span class="example-counter"></span> Basic CSS Examples

The following demonstrates a few of the core CSS selector methods to apply basic styles.

#### EX.<span class="example-counter"></span> Selecting by element name

The following styles target all `<h1>` (heading 1) and `<p>` (paragraph) elements on the page, 

- changing the color of the headings to red and setting the font size to 28 pixels
- changing the color of the paragraphs to blue and setting the font size to 16 pixels

Name selectors are created using the name of any HTML element/tag which exists in the HTML being styled.

```css
h1 {
    color: red;
    font-size: 28px;
}

p {
    color: blue;
    font-size: 16px;
}
```

An example of an HTML page for which the above style is valid:

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
    <h1>I'm the main heading!</h1>
    <p>I'm just some simple filler content.</p>
    <p>I'm just some simple filler content.</p>
</body>
</html>
```

**Element name selectors can match more than one element**.

#### EX.<span class="example-counter"></span> Selecting by class name

The following styles target all elements with a `class="important"` attribute on the page, 

- changing the background color to red
- changing the foreground (text) color to white
- setting a 16 pixel padding to all sides of the matching elements
- setting a 16 pixel margin to all sides of the matching elements

Class selectors are created using the dot/period (`.`) character and a valid identifier which exists in the HTML being styled.

```css
.important {
    background-color: red;
    color: white;
    padding: 16px;
    margin: 16px;
}
```

An example of an HTML page for which the above style is valid:

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
    <h1>I'm the main heading!</h1>
    <p>I'm just some simple filler content.</p>
    <div class="important">Hey! Look at me! I'm important!</div>
    <p>I'm just some simple filler content.</p>
</body>
</html>
```

**Class selectors can match more than one element**.

#### EX.<span class="example-counter"></span> Selecting by ID

The following styles target all elements with an `id="note"` attribute on the page, 

- changing the background color to light blue
- changing the foreground (text) color to dark blue
- setting a 16 pixel padding to all sides of the matching elements
- setting a 16 pixel margin to all sides of the matching elements

ID selectors are created using the hash (`#`) character and a valid identifier which exists in the HTML being styled.

```css
#note {
    background-color: lightblue;
    color: darkblue;
    padding: 16px;
    margin: 16px;
}
```

An example of an HTML page for which the above style is valid:

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
    <h1>I'm the main heading!</h1>
    <p>I'm just some simple filler content.</p>
    <div id="note">I'm a note! My ID must exist once and only once on the page to be valid.</div>
    <p>I'm just some simple filler content.</p>
</body>
</html>
```

**ID selectors can match one and only one element**.
</article>