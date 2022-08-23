const logo = document.querySelectorAll('#ll path');

console.log(logo);
for (let i = 0; i < logo.length; i++) {
    console.log(`LETER ${i} is ${logo[i].getTotalLength()})`);
    
}