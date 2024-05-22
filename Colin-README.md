# Using VSCode/Markdown Guide

Every time you open this project, open a new terminal by putting your cursor at the top of your screen, clicking terminal, then clicking new terminal. When the prompt comes up, run the command: 

git pull

Then click enter, and Colin's changes should appear on your computer. Then, run the command:

npm run dev

And command-click the link that pops up in the terminal. This will take you to a hosted version of the website that makes live updates.

Every time you want to "deploy" edits you've made to the actual website, click the three dots on the left side of your screen (the three dots that are connected by some wavy lines). Enter a message for what you've changed, then click commit, then click sync changes. Say yes to any prompt that pops up.

## Getting Started with VSCode

When the `istrail-lab.github.io` folder is opened in VSCode you should have all the files/folders in the folder listed on the left hand side when the explorer (the icon just under the magnifying glass on the left) is expanded. All the markdown files you make should be placed in the `content/` folder, located in the root of `istrail-lab.github.io`.

To make a new markdown file select the `content/` folder by pressing on it in the file explorer. Then click the button at the top of the explorer (page with a little plus icon) to make a new file. You'll be asked to enter a name for the file. To make sure its a markdown file be sure that this name ends in `.md`. To add a new folder is very similar, except you use the new folder button (folder icon with a plus icon).

To open a file from the explorer double click its name. You can expand and collapse folders by clicking their names as well.

If the Markdown Preview Pane is not open, you can open it once you have a Markdown file open. With a Markdown file open press the keys `CMD + SHIFT + P`. Then type and select `Markdown: Open Preview to the Side`.

To commit your changes use the three buttoned icon underneath the explorer on the left hand side. This will open Git source control. Add a message to your commit and then press `Commit`. Then press `Sync Changes`.

# Making Edits

## Adding to the Site (Simple)

First, navigate to the astro page that you want to change. These are organized nicely in the "pages" directory. For the sake of example, let's make an edit to the assemblies research page.

Let's say we want to add/edit some text. If we open up pages/research/assemblies.astro, we can see that the text of the abstract in each page lies in this document, but the text for each relevant paper lies elsewhere. To edit one of the abstracts, simply editing the text in this document will suffice.

To track down the relevant papers, we can look at the imports of the file (this notion holds more generally). At the top of the file (where the imports are), we can see that publications was imported from components/publicationList/publications. If we navigate and open that file, we can see that its easy to update by just editing text. If we want to add a new paper, we can just copy an existing paper in the list and replace each field with the relevant information.

It's slightly more involved to add a new abstract to this page, but not much. We can just copy a section enclosed by <Abstract> and </Abstract> and replace the relevant information (e.g. the abstract itself, the pdf link, etc.).

The process we've gone through here is generally applicable to adding to any list on the website. Find the relevant astro page, track down where the list itself exists, and add/edit freely.

## Adding Content

The one caveat with the above is that if we want to include a new PDF, we need to upload that PDF into this directory to link it appropriately OR provide some alternate link. For example, in publications.ts, most of the papers are linked to papers at brown.edu. If you instead have some local PDF that's not published anywhere, you can put it in the "public" directory, wherever it fits best (e.g. papers, or we can create a new directory for new content categories). Then, you can link it with "public/name-of-dir/name-of-file.pdf.

## Adding to the Site (Complex)

In most cases, the best way to add to the site is to look around the website for an element that looks similar to what you want, copy it, and replace the relevant information. Sometimes, this will not format nicely wherever you copy it. This can usually be remedied by wrapping it in a div with particular tailwind CSS styling. Looking around the site for strings that can go in the "class" tag of this div is a pretty good strategy, but so are generative AI and google. The tailwind docs are at https://tailwindcss.com/docs/installation.

## Adding a New Page to the Site

In this case, you'll want to make a new astro file under the correct folder in src/pages, and follow the format of some existing page on the site for inspiration. My recommendation is that you mostly copy components that you like, and send me an email if you want to make something look different than any other existing component on the site.

## Example

Let's do one example of a complex edit where I talk through my thought process. Suppose I wanted to put the image of a photo of a sea urchin into the transcriptome of the 

