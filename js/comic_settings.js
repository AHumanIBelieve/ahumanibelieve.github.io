//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 3; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "jpg"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["<< First","< Previous","Next >","Last>>"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "NPC Monologues", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2022, 12, 28), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
                        <p>You know DM of the Ring or Darths and Droids? Well, there wasn't one for Harry Potter so I decided to make it. A short one to start, just of dumbledore walking in. I am honestly quite surprised no-one had done this, to be honest, but now I have accepted the challenge. I hope you have fun reading this thing.</p>
            <h3>Transcript</h3>
            <p><i>Image of the Privet Drive sign. Dumbledore walks in</i></p>
            <p>Dumbledore: Finally, we're here. Stupid Muggles.</p>
            <p>Player 1: Wait. Muggles? Explain. You tell us to play this new campaign. It'll be fun, you said. It'll make sense you said.</p>
            <p>Player 2: Like the last one you made us play...</p>
            <p>Player 1: Get explaining. You called it lore heavy. I hope lore doesn't mean lots of NPC monologues.</p>
            `,
    },
    {
        pgNum: 2,
        title: "DnD must be medieval",
        date: writeDate(2023,1,1),
        altText: "Check out this cool youtube video!",
        imageFiles: "1",
        authorNotes: `
		<p>Players don't like long monologues, but if they happen to be gamers, I think calling them cutscenes is the way to go. Another weird thing is that a non-medieval DnD campaign is just considered weird. Trying to industrialise a medieval world is okay though, for some reason. In my ongoing campaign, I am the head of a multinational group of taverns. I still have to remind the DM about my paychecks, though.</p>
		<p>Also, about making Dumbledore like, well, how he is, I felt like having an old wise guy who thinks that he is cool would be funny.</p>
		<p>About the schedule of uploads, I'm thinking maybe mondays, thursdays, saturdays, and sundays at noon.This way I can pre-make all the strips for that week and then schedule them.</p>
		<p>Also, to my 3 readers, hapy new year!</p>
		<h3>Transcript</h3>
		<p>DM: Ok. Fine. Look. It'll all be explained. Peter, think of it like a cutscene. Important Backstory. Also, Robert, my last campaign made perfect sense!</p>
		<p>Robert: As much sense as you're making...</p>
		<p>Dumbledore: Lights out, uh-huh, oh yeah.</p>
		<p>VFX: SWOOSH<i> (as the lights go out and fly to dumbledore's Deluminator)</i></p>
		<p>Peter: Is he okay? Also, why is this not medieval? There are cars!</p>
		<p>DM: Can you please just SHUT UP and let me do this? Please?</p>
		
		`
    },
    {
        pgNum: 3,
        title: "Druid?",
        date: writeDate(2022,01,02),
        altText: "potato",
        imageFiles: "2",
        authorNotes: `
		<p>Druids and wildshape have become one and the same, so much that any druid character without wildshape is considered impossible to exist.</p>
		<p>This DM has decided to roll his conversation. He is more strict than the DM in Darths and Droids, but not as strict as the one in DM of the ring. Peter's lucky his character hasn't been prematurely hit with a meteorite, with -20 on death saves</p>
		<p>If you were wondering, he was rolling persuasion for <s>Prof McG</s> Professor McGonnagal</p>
		<p>Also, can someone please help me make a comments system? Asked for help on stack overflow <a href="https://stackoverflow.com/questions/74975317/making-a-comments-system-in-rarebit">here</a></p>
		<h3>Transcript</h3>
		<p>Dumbledore: I knew y'all would be here, Prof McG!</p>
		<p><i>Professor McGonnagal turns into a human from cat form</i></p>
		<p>Professor McGonnagal: Good evening, Professor Dumbledore.</p>
		<p>Peter: YO! It's a druid with wildshape. But I thought you said everyone was a wizard?</p>
		<p>DM: SHUT UP, Peter!</p>
		<p>McGonnagal: Are the rumours true, Albus?</p>
		<p>Dumbledore: Uh-huh, Prof McG! The good ones <i>and the bad onse</i>.</p>
		<p>McGonnagal: And the boy?</p>
		<p>Dumbledore: Hagrid is bringing him, Prof.</p>
		<p>McGonnagal: Is it wise to trust Hagrid with something this important?</p>
		<p>Dice FX: Roll - 4</p>
		<p>Dumbledore: I trust Hagrid with my life, Prof McG, and so should you!</p>
		<p>Peter: Boooori-</p>
		<p>DM: SHUT UP, Peter!
		`
    },
    
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
