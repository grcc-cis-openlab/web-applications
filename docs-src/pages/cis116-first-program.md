---
layout: default
title: 'CIS-116 First Program: Hello, World!'
pageKey: cis116-first-program
permalink: /cis116-first-program
---

# Creating Your First Program

<div class="alert alert-primary">
    <i class="fas fa-info-circle"></i> The code and examples which follow assume that you are learning <i>Python</i>, either as a student of GRCC's 
    <i>Introduction to Programming</i> course or as an independent learner. You will need to have Python installed locally in order to follow along.
</div>

---

One major advantage to using Python as an introductory course is that it's really easy to get instant feedback &mdash; Python can be executed from the command line
(console) without starting up a code editor. 

1. Start your operating system's console application. For Windows users, this can be the command line (cmd), Powershell, or the Terminal application. For Linux and macOS users, this will (normally) be the Terminal application.
2. Switch to "Python mode" by typing `py`. You should see something similar to
```ps
Python 3.12.4 (tags/v3.12.4:8e8a4ba, Jun  6 2024, 19:30:16) [MSC v.1940 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```
3. Type the following line of code at the prompt (`>>>`), and then press <kbd>Enter</kbd>:
```python
print('Hello, world!')
```
Your terminal will print the quoted value _'Hello, world!'_. Congratulations! You've written _and_ executed your first Python program!

![Windows Terminal, display the result of executing "Hello, world" with Python](assets/images/terminal-python-hello-world.png)

### Breaking Down the Example

For the example above, you were asked to enter the following text into a console window:

```python
print('Hello, world!')
```

This is what's known as _source code_ (or more commonly, just _code_). It's an instruction requesting your computer to execute an action; in this case, to 
output a series of characters to the console window in which the code was entered. This "series of characters" is referred to as a _string_ when creating Python 
code, and is denoted by the opening and closing quotation marks. In Python, both single-quotes (`'`) and double-quotes (`"`) are acceptable when creating strings.

The text which surrounds our string, `print( )` is what's known as a _function_. In simple terms, it's a command which is defined as part of the Python language 
and which outputs the given content (the value entered after the `(` character and before the `)` character) to the console window. You will learn more built-in 
functions as you progress through your Python course, and eventually learn how to create your own.

### Further Learning

- [Khan Academy: Intro to computer science: Python](https://www.khanacademy.org/computing/intro-to-python-fundamentals)
- [Geeks for Geeks: Learn Python Programming Language](https://www.geeksforgeeks.org/python-programming-language-tutorial/)
- [Codecademy: Learn Python 3](https://try.codecademy.com/learn-python-3)