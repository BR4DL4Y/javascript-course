
# Module 1: HTML5 and CSS3 - Technical Notes and Laboratory

## 1. HTML5 Base Architecture

Mandatory semantic structure for any modern web document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module 1 Laboratory</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Main Title</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Content Section</h2>
        </section>
    </main>
    <footer>
        <p>&copy; 2026</p>
    </footer>
</body>
</html>

```

---

## 2. HTML5 Fundamentals

HTML5 is the standard that serves as a software reference for connecting with the creation of web pages in their different versions. It defines a basic structure and code to define web content such as text, images, videos, games, and more.

* **HyperText**: Text that links to other contents, which can be another text or another file, forming the basis of the web.


* **Markup**: Web pages are built using tags (e.g., paragraph tag: `<p>HELLO</p>`).


* **Language**: Has its own rules, structure, and conventions to define structure and content.



---

## 3. CSS3 Fundamentals

CSS (Cascading Style Sheets) is a language that allows defining and creating the visual presentation of a document structured in a markup language like HTML.

* **Cascading**: Styles applied to web elements flow in a descending manner to the elements contained within them.


* **Style**: Applies visual styles to different elements.


* **Sheets**: Styles are generated in separate files or sheets with a `.css` extension.



### Relationship between HTML, CSS, and JavaScript

* **HTML**: Content - *What is it?*


* **CSS**: Presentation - *What does it look like?*


* **JavaScript**: Behavior - *What does it do?*



---

## 4. Types of CSS Integration

### Inline CSS

Styles are applied directly to HTML elements using the `style` attribute. Useful for specific single-element styling, but hard to maintain as complexity grows.

```html
<div style="background-color: rgb(102, 102, 157); width: 300px; text-align: center; font-size: 16px;">This is an inline styled line.</div>

```

### Internal (Embedded) CSS

Styles are defined inside the `<style>` section of the HTML document, usually within the `<head>`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal CSS Example</title>
    <style>
        div {
            color: aliceblue;
            background-color: rgb(66, 66, 122);
            width: 300px;
            text-align: center;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div>This is an internal styled line.</div>
</body>
</html>

```

### External CSS

Styles are defined in an independent stylesheet file (`.css`) and linked using the `<link>` tag. This is the most common and reusable approach.

```html
<link rel="stylesheet" type="text/css" href="externo.css">

```

---

## 5. Navigation Bar Structure & Styling

```html
<header>
    <h1>Header</h1>
</header>
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
<footer>
    <p>&copy; 2026 My Website</p>
</footer>

```

### Navigation CSS Styling

```css
nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    transition: color 0.35s;
}

nav ul li a:hover {
    color: #3498db;
}

```

---

## 6. CSS3 Selectors, Shapes, and Effects

### Types of Selectors

* **ID Selector**: `#myId { color: red; }`


* **Class Selector**: `.myClass { color: blue; }`


* **Attribute Selector**: `a[target="_blank"] { color: green; }`


* **Pseudo-class**: `:hover { color: purple; }`


* **Pseudo-element**: `p::first-line { font-weight: bold; }`



### Geometric Shapes in CSS3

```css
/* Square */
.square {
    width: 100px;
    height: 100px;
    background-color: #3498db;
}

/* Circle */
.circle {
    width: 100px;
    height: 100px;
    background-color: #e74c3c;
    border-radius: 50%;
}

/* Triangle */
.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #2ecc71;
}

```

### Positioning Elements

```css
.relative {
    position: relative;
    top: 10px;
    left: 20px;
}

.absolute {
    position: absolute;
    top: 50px;
    left: 50px;
}

.fixed {
    position: fixed;
    bottom: 10px;
    right: 10px;
}

.z-index-element {
    position: absolute;
    z-index: 10;
}

```

### CSS3 Filters

```css
.blur {
    filter: blur(5px);
}

.grayscale {
    filter: grayscale(100%);
}

.sepia {
    filter: sepia(100%);
}

```