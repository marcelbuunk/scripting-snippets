﻿//Opens Project Folder//CC-BY-SA Nik Ska, 2014var ddOpenProjectFolder = function(){    var prjPath = app.project.file;    if(prjPath){        var prjFldr = new Folder(prjPath.fsName).path;        if($.os.substr(0,7).toLowerCase() == "windows"){            prjFldr = prjFldr + "\\";        }        else{            prjFldr = prjFldr + "/"        }            var f = Folder(prjFldr);        f.execute();    }    else alert("Save the project first");}ddOpenProjectFolder()