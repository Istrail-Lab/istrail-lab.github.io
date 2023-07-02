# Using VSCode/Markdown Guide

## Getting Started with VSCode

Open VSCode either by using the icon on the dock or using the desktop shortcut.

Once VSCode is open you want to be sure you have the `istrail-website` folder open. You can do this by pressing `File > Open Folder` and then using the new dialog box to navigate to the `istrail-website` folder on your computer. With the folder press `Open`.

When the `istrail-website` folder is opened in VSCode you should have all the files/folders in the folder listed on the left hand side when the explorer (the icon just under the magnifying glass on the left) is expanded. All the markdown files you make should be placed in the `content/` folder, located in the root of `istrail-website`.

To make a new markdown file select the `content/` folder by pressing on it in the file explorer. Then click the button at the top of the explorer (page with a little plus icon) to make a new file. You'll be asked to enter a name for the file. To make sure its a markdown file be sure that this name ends in `.md`. To add a new folder is very similar, except you use the new folder button (folder icon with a plus icon).

To open a file from the explorer double click its name. You can expand and collapse folders by clicking their names as well.

If the Markdown Preview Pane is not open, you can open it once you have a Markdown file open. With a Markdown file open press the keys `CMD + SHIFT + P`. Then type and select `Markdown: Open Preview to the Side`.

To commit your changes use the three buttoned icon underneath the explorer on the left hand side. This will open Git source control. Add a message to your commit and then press `Commit`. Then press `Sync Changes`.

## Markdown Guide

The [Markdown Guide](https://www.markdownguide.org/basic-syntax/) Page has much more detailed information about this, however, here's a quick summary of some basic things you can do in markdown.

Headings are done by placing hashtags (`#`) before the text you want to make into a heading. Note: there must be a space between the hashtag and the text for it to be properly rendered. Adding more hashtags will make the heading smaller.

Links are done by using the syntax `[link text](link url)`. See the Markdown Guide link above for an example.

Images and videos are handled very similarly. To embed an image use the syntax `[alt text](relative path to image)`. Similarly, for local videos use the syntax `[alt text](relative path to video)`. Unfortunately, you can't directly embed YouTube videos, but you can still link to them.

To make text italic surround it with `_`, such as _example_. To make text bold surround it with two `*`, such as **example**. To make text both bold and italic surround it in both two `*` and one underscore `_`, such as **_example_**.

You can make bullet points by using `-` such as:

-   bullet
-   bullet
    -   nested
        -   nested again
-   bullet

You can make a number list by using the number followed by a dot such as:

1. one
2. two
3. three
