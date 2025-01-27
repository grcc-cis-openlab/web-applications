---
layout: default
title: Connecting to the GRCC Raider Web Server
pageKey: connecting-to-raider
permalink: /connecting-to-raider
searchable: true
---

# Connecting to the GRCC Raider Web Server

For the CIS-148 course, GRCC provides a basic web server, called _Raider_, to which you will upload your HTML (and related) files as you complete your assignments. 
Just prior to the beginning of this course, an account is created for each enrolled student, using the same login username you will use to log into other campus services 
such as Blackboard. Once this account is created, you can access your web directory by visiting 

```http
https://raider.grcc.edu/~yourusername/
```

replacing _yourusername_ with your GRCC username.

The process of uploading your content to Raider relies on a technology called _Secure File Transfer Protocol_, or **SFTP**. SFTP uses an encrypted connection to connect 
to the web server, which then allows you to copy files from your computer (referred to as the "local instance") to another computer (the "remote instance", usually a server). 

Most operating systems include basic commandline utilities that can be used to perform SFTP, but it's generally easier for beginners to use a desktop application. We have included 
instructions below for setting up two popular SFTP programs &mdash; choose one.

### Using FileZilla

FileZilla ([https://filezilla-project.org/](https://filezilla-project.org/)) is a popular SFTP client and is available for most operating systems. Follow the steps below to connect to your Raider account using FileZilla:

1. From the menu bar, select **File**, then **Site Manager...**
2. Click the **New site** button, located in the bottom left of the dialog.
3. Enter a meaningful name for this site entry where prompted (the site name should be in edit mode in the _My Sites_ list).
4. On the right side of the dialog, click the **Protocol:** dropdown and select _SFTP - SSH File Transfer Protocol_.
5. In the **Host:** textbox, enter _raider.grcc.edu_
6. In the **Port:** textbox, enter the value `22` &mdash; this is the port normally used for SFTP connections.
6. Click the **Logon Type:** dropdown and select _Normal_.
7. In the **User:** textbox, enter your GRCC username.
8. In the **Password:** textbox, enter your GRCC password. _Please note: if you have not yet logged into a campus computer, you may need to first reset your password before you will
be able to connect to Raider._
9. Click the **Connect** button at the bottom of the dialog. **Done!**

Assuming everything was entered properly, FileZilla will connect to your Raider account. You'll see the right side of the application (the _Remote site_ panes) reload to display the current contents of your web directory.

### Using Cyberduck

Cyberduck ([https://cyberduck.io/](https://cyberduck.io/)) is another free SFTP client and is available for most operating systems. Follow the steps below to connect to your Raider account using Cyberduck:

1. In the main toolbar, click **Open Connection**. A dialog will open.
2. In the dialog, click the first dropdown and select _SFTP (SSH File Transfer Protocol)_.
3. In the **Server:** textbox, enter _raider.grcc.edu_.
4. In the **Port:** textbox, enter the value `22` &mdash; this is the port normally used for SFTP connections.
5. In the **Username:** textbox, enter your GRCC username.
6. In the **Password:** textbox, enter your GRCCC password. _Please note: if you have not yet logged into a campus computer, you may need to first reset your password before you will
be able to connect to Raider._
7. Click the **Connect** button. **Done!**

Assuming everything was entered properly, Cyberduck will connect to your Raider account. You'll see the application reload to display the current contents of your web directory.

## Uploading Files

At this point, you can use FileZilla or Cyberduck to navigate to the *web_docs* directory. You must upload your files to *web_docs* &mdash; this is what is known as the _site root_, the public directory from which the web server will respond to requests.

For each assignment, you'll normally upload a folder; for example, the first assignment is usually saved locally in a folder named _Unit1_. You'll upload this folder to *web_docs*. 
You'll wind up with a directory structure on Raider that looks something like:

```
- web_docs
    - Unit1
        - index.html
```

To view this file, you'll enter the following in your web browser's navigation bar:

```http
htttps://raider.grcc.edu/~yourusername/Unit1/index.html
```

The same process is used for every assignment which you upload:

```http
htttps://raider.grcc.edu/~yourusername/NameOfUnitFolder/NameOfAssignmentFile.html
```