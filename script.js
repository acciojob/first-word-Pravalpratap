function firstWord(str) {
 const trimmedStr = str.trim();
    
    // Find the index of the first space
    const spaceIndex = trimmedStr.indexOf(' ');
    
    // If no space found, return the whole trimmed string
    if (spaceIndex === -1) {
        return trimmedStr;
    }
    
    // Return the substring from start to the first space
    return trimmedStr.substring(0, spaceIndex);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
