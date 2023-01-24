const buttonH3 = document.querySelectorAll("button h3");
const capsH1 = document.querySelectorAll("div h1");
const capsH2 = document.querySelectorAll("div h2");

/* Ngecek link href masing2 tag */
const url = document.querySelectorAll(".buttonStyle");
for(let link of url) {
    console.log(link);
}

/* Node List of Buttons tag with h3 tag in it */
console.log(buttonH3);

/* Make the Button h3 become Caps all */
for(let buttonTitle of buttonH3) {
    console.log(buttonTitle.innerHTML.toUpperCase());
    buttonTitle.innerText = buttonTitle.innerHTML.toUpperCase();
}

/* Make the h1 and h2 become caps h1 */
for(let titleCapsH1 of capsH1) {
    console.log(titleCapsH1.innerHTML.toUpperCase());
    titleCapsH1.innerText = titleCapsH1.innerHTML.toUpperCase();
}

/* Make the h1 and h2 become caps h2 */
for(let titleCapsH2 of capsH2) {
    console.log(titleCapsH2.innerHTML.toUpperCase());
    titleCapsH2.innerText = titleCapsH2.innerHTML.toUpperCase();
}

/* Bikin String &amp; hilang menjadi '&' */
function fixSymbolError(newFixH3Button) {
    const fixH3Button = document.querySelectorAll("body");
    let pattern = "jasmine";
    let replacement = "jazz";
    newFixH3Button = fixH3Button.replaceAll.innerHTML(pattern,replacement);
}
