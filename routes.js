var uuid = require('node-uuid');
var jf = require('jsonfile');
var file = 'Json/data.json';
entries = jf.readFileSync(file);
function find(id,array){
    for(var i=0; i<array.length; i++){
        if(array[i].id==id)
            return array[i];
    }
};

exports.index=function(req,res){
    res.sendfile("views/index.html");
};

exports.todos=function(req,res){
    res.sendfile(file);
};

exports.submit=function(req,res){
    var new_todo= {
    "name":req.body.item,
    "isDone":false,
    "id":uuid.v4()
    };
    entries.push(new_todo);
    jf.writeFileSync(file, entries);
    res.redirect("/");
};

exports.select=function(req,res){
    var found= find(req.params.id, entries);
    res.send(found);
};

exports.change=function(req,res){
    var found= find(req.params.id, entries);
    found.isDone=true;
    jf.writeFileSync(file, entries);
    
};