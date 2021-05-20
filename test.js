let obj = {
    name: "faran",
    personal:{
        DOB: 1991
    }
}

console.log(obj.personal.DOB)

class DB {
    write(){
        //this will write some files
    }

    read(){
        //this will read some files
    }
}



DB.read()

var util = require("util");
var fs = require("fs");

fs.unlink("db/db.json") // to delete a file

var writeFileAsync = util.promisify(fs.writeFile)

var originalArr = [1,2,3,4]

var newArr = [...originalArr, 5] // [1,2,3,4,5]

var id = 4

var filteredNotes = originalArr.filter(function(note){ note.id != id }) // [1,2,3]