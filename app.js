const buttonH3 = document.querySelectorAll("button h3");

/* Node List of Buttons tag with h3 tag in it */
console.log(buttonH3);

/* Make the Button h3 become Caps all */
for(let buttonTitle of buttonH3) {
    console.log(buttonTitle.innerHTML.toUpperCase());
    buttonTitle.innerText = buttonTitle.innerHTML.toUpperCase();
}