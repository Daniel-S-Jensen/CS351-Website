function load() {
    var data = [];
    var textBox = document.getElementById("grades").value;
    var lines = textBox.split(/\n/);
    
    var i = 0;
    //while (true) {
    for (var j in lines) {
        
        //var line = lines[i];
        var line = lines[j];
        var values = line.split(/\s/);
        var course = values[0];
        var grade = values[1];
        var hours = parseInt(values[2]);
        var point = toPoint(grade);
        var item = [course, grade, hours, point];

        data.push(item);
    }

    return data;
}
    
function toPoint(grades) {
    if (grades == 'A+') {
        return 4;
    }
    if (grades == 'A') {
        return 4;
    }
    if (grades == 'A-') {
        return 3.7;
    }
    if (grades == 'B+') {
        return 3.3;
    }
    if (grades == 'B') {
        return 3;
    }
    if (grades == 'B-') {
        return 2.7;
    }
    if (grades == 'C+') {
        return 2.3;
    }
    if (grades == 'C') {
        return 2;
    }
    if (grades == 'C-') {
        return 1.7;
    }
    if (grades == 'D+') {
        return 1.3;
    }
    if (grades == 'D') {
        return 1;
    }
    if (grades == 'F') {
        return 0;
    }
    
    return 0;
    
}

function display(data) {
    var totalHours = 0;
    var totalPoints = 0;
    
    for(var i in data) {
        var item = data[i];
        totalHours += item[2];
        totalPoints += item[3] * item[2];
    }

    var gpa = 0;
    if (totalHours > 0) {
        gpa = totalPoints / totalHours;
    }

    document.getElementById("numGradePts").value = totalPoints;
    document.getElementById("numCredHours").value = totalHours;
    document.getElementById("GPA").value = gpa.toFixed(3);
       
}

function onButtonPress() {
    var data = load();
    display(data);
}