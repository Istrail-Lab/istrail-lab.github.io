# Guide to Wikipedia Biography Page

## Opening the Project and Making Changes

Everytime that you open this project, make sure to go to the terminal prompt at the bottom of the screen and run the command:

git pull

After entering the command, click enter, and any prior changes (from Sissy) should appear on your computer. 

Once you have made edits and are ready to deploy those edits to the actual websites, you have two options:

* Using the terminal, you can run these three commands in order:
    1. git add .
    2. git commit -m "message" (you can replace the text inside the quotations with any message you want)
    3. git push
* Using the VSCode interface, you can click the three-network nodes on the left side of your screen (the three dots that are connected by some wavy lines). Enter a message for what you've changed, then click "commit", then click "sync changes". Say yes to any prompt that pops up.

## The Biography Page

The template for the Wikipedia page is found in the Biography page of the website with the filename of biography.astro. You can navigate to this page in the directory by going through src > pages > sorin-istrail > biography.astro. 

To edit the page, look for any instances of "TEXT", which can be replaced with whatever text you would like to. Below are more specific instrunctions for each of the elements on the page:

### What you can freely edit

All the body text (paragraphs, bullet points, publication entries) is just plain text inside the file. I have kept all of the basic headings for a Wikipedia page, such as early life and education, career, achievements, etc. Look for those section headings, which you can also refer to the website for, and you can just edit the paragraph text for it.

## The infobox (top-right box)

The infobox has two parts you might want to update:

**The picture** — replace the `istrail.jpg` import at the top of the file with a different image from `src/assets/`.

**The table rows** — each row looks like this:
```
<td class="...">Born</td>
<td class="...">TEXT</td>
```
The first row is the label of the row, which I have kept the actual name of, the second row is the value that should all read "TEXT" right now. Edit the second row to change the content.

## The section headings

Each section heading has an `id` that the table of contents links to. If you rename a heading, update the matching `href` in the table of contents too. For example:
```
<h2 id="early-life" ...>Early Life and Education</h2>
```
links to:
```
<a href="#early-life">Early Life and Education</a>
```
Both need to match so that the links at the top of the page work correctly.

## Adding or removing sections

To **add** a section, copy any existing `<h2>` block and the paragraphs below it, paste it where you want it, and add a matching entry to the table of contents at the top.

To **remove** a section, delete the `<h2>` and its content, and delete its line from the table of contents.