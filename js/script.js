

function deleteAll(){
    document.getElementById('text-area').value = '';
}

function capitalize() {
    //  Converts the text to upper/lower case. Button will work as toggle.
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toUpperCase());
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function sort(){
    // rearranges the lines into sorted alphabetical order
    var text = document.getElementById('text-area').value;
    var lines = text.split('');
    var newLines = [];
    
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toLowerCase());
        // let newLines = text.split('').sort().join('');
    //     document.getElementById('text-area').value = newLines;
    }
    newLines.sort();
    document.getElementById('text-area').value = newLines.join('');
    // document.getElementById('text-area').value = text.split('').sort().join('');
    
}

function reverse (){
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].split('').reverse().join(''));
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function addNumbers() {
    // Places a number in front of each line, such as "1. " (Ignore previous numbers in front of them.)
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push((i + 1) + '. ' + lines[i]);
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function stripBlank () {
    // removes any empty lines from the text area also remove empty space at beginning and end of each line
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() != '') {
            newLines.push(lines[i].trim());
        }
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function shuffle(){
    // Rearranges the lines into a random order. Js do not have this built in, use Math.random().
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].trim());
    }
    newLines.sort(function () {
        return 0.5 - Math.random();
    }
    );
    document.getElementById('text-area').value = newLines.join('\n');
}