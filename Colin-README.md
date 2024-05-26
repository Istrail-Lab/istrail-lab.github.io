# Using VSCode/Markdown Guide

## Opening the Project

Every time you open this project, open a new terminal by putting your cursor at the top of your screen, clicking terminal, then clicking new terminal. When the prompt comes up, run the command:

git pull

Then click enter, and Colin's changes should appear on your computer. Then, run the command:

npm run dev

And command-click the link that pops up in the terminal. This will take you to a hosted version of the website that makes live updates.

Every time you want to "deploy" edits you've made to the actual website, click the three-network-nodes on the left side of your screen (the three dots that are connected by some wavy lines). Enter a message for what you've changed, then click commit, then click sync changes. Say yes to any prompt that pops up.

## File Organization

When the `istrail-lab.github.io` folder (this project) is opened in VSCode you should have all the files/folders in the folder listed on the left hand side when the explorer (the icon just above the magnifying glass on the left) is expanded.

### Content

For now, don't worry about this folder. We can talk more about it once you're comfortable adding text, images, cards, etc.

### Public

A good place to put new papers, images, etc. that you want to be accessible by opening `istrail-lab.github.io/directory/file` (in the case where the file is at `public/directory/file`). You can also link these papers, images, etc. on the site, as will be explained below.

### SRC

The source directory for most of the website's code.

`assets` is another place to put photos, etc. for linking on the website. When linking a file in assets to a specific page `x.astro` on the site, you want to import the file via the command `import <variable name> from @assets/directory/file`, which you can then use anywhere in page `x`. See `src/pages/in-memoriam/eric-davidson.astro` for an example of this (with both an image and a file).

`components` contains some of the lists Hammad used (e.g. publication list), which you can easily add to, e.g. at `honorRoll/honorRoll.ts` (just match the format given in the file). For now, don't worry about all the tsx files...this is for when you get a little more comfortable with adding content.

`pages` contains astro files for each page on the site. It's organized roughly according to the menu that pops up when you click the three lines in the top right of the website. Each file imports components (e.g., EssayCard) and assets (like a photo or file you want to link) and uses them in its main code, which is like "abstracted" html (abstracted, by the nature of the components).

You should ignore `layouts`, `lib`, etc., as these are more complex (to some extent, they help provide the abstraction from html to the components in each astro page). We can talk about them as you get more comfortable web programming.

### Searching

If you can't find some part of the site that you want to edit, your best bet is to look up a small quote (5 or so words) nearby to the part of the site you want to edit. To search something like this up, you click the magnifying glass on the left of this window, and enter the words you want to search for. For example, if I want to know where the phrase `American oyster Crassostrea virginica` is used, I can search it and get back the file `assemblies.astro`, which I could then edit myself.

# Making Edits

## Adding to the Site (Simple)

First, navigate to the astro page that you want to change. These are organized nicely in the "pages" directory. For the sake of example, let's make an edit to the assemblies research page.

Let's say we want to add/edit some text. If we open up pages/research/assemblies.astro, we can see that the text of the abstract in each page lies in this document, but the text for each relevant paper lies elsewhere. To edit one of the abstracts, simply editing the text in this document will suffice.

To track down the relevant papers, we can look at the imports of the file (this notion holds more generally). At the top of the file (where the imports are), we can see that publications was imported from components/publicationList/publications. If we navigate and open that file, we can see that its easy to update by just editing text. If we want to add a new paper, we can just copy an existing paper in the list and replace each field with the relevant information.

It's slightly more involved to add a new abstract to this page, but not much. We can just copy a section enclosed by <Abstract> and </Abstract> and replace the relevant information (e.g. the abstract itself, the pdf link, etc.).

The process we've gone through here is generally applicable to adding to any list on the website. Find the relevant astro page, track down where the list itself exists, and add/edit freely.

## Adding Content

The one caveat with the above is that if we want to include a new PDF, we need to upload that PDF into this directory to link it appropriately OR provide some alternate link. For example, in publications.ts, most of the papers are linked to papers at brown.edu. If you instead have some local PDF that's not published anywhere, you can put it in the "public" directory, wherever it fits best (e.g. papers, or we can create a new directory for new content categories). Then, you can link it with "name-of-dir/name-of-file.pdf".

## Adding to the Site (Complex)

In most cases, the best way to add to the site is to look around the website for an element that looks similar to what you want, copy it, and replace the relevant information. Sometimes, this will not format nicely wherever you copy it. This can usually be remedied by wrapping it in a div with particular tailwind CSS styling. Looking around the site for strings that can go in the "class" tag of this div is a pretty good strategy, but so are generative AI and google. The tailwind docs are at https://tailwindcss.com/docs/installation.

## Adding a New Page to the Site

In this case, you'll want to make a new astro file under the correct folder in src/pages, and follow the format of some existing page on the site for inspiration. My recommendation is that you mostly copy components that you like, and send me an email if you want to make something look different than any other existing component on the site.

## Example

Let's do one example of a complex edit where I talk through my thought process. Suppose I wanted to put the image of a photo of a sea urchin into the Eric Davidson "in memoriam" page. Then, I can start by finding that page by navigating to `src/pages/in-memoriam/eric-davidson.astro` as advised in the organization section above. From here, I see a layout component with a carousel component nested within it. Looking back at the website, I can see that carousel is probably referring to the slideshow, which is getting its photos from the import-like statement `(await Astro.glob("../../assets/eric_davidson/*.jpg"))`. I want to add my urchin image below this slideshow, so I'll probably be putting a new component (like carousel) below the existing code but within the "layout," which refers to the wrapper of the whole page.

From here, I'm now thinking – "what component should I use to insert an image here"? To figure this out, I'll poke around the website and find another static photo inserted somewhere. For example, on the "Sorin Istrail" page, there's a static photo of you. To find the code for such an image, I'll search the quote right below that photo, e.g. `Engaging the world, one inspiring course` using the magnifying glass on the left. This sends me to `src/pages/sorin-istrail/index.astro`. If I scroll up a little, I find the line `<img src={istrail} alt="Sorin Istrail" />`. If I copy this line over `src/pages/in-memoriam/eric-davidson.astro` below the carousel and import from assets or public as advised above, the urchin image appears on the page! If the spacing of the image is funny with respect to the carousel, maybe I can add a `<div>` around both the carousel and the image, and do `class=` some string of text from somewhere else on the site that has nice spacing.

We implemented this edit together, and also implemented a link on the same Eric Davidson page. Use this as an example for now. If you want to get more advanced, you can try copying something like an `EssayCard` from somewhere else on the site and add a new essay to one of the in memoriam pages. This will mostly be cut and paste, with a little bit of content editing!

I've left some of this a little vague, as I'm not sure where you may or may not trip up trying to add things to the site. Please send me an email if you want me to expand on any part of this doc!
