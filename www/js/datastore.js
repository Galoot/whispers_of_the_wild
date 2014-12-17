function Datastore() {
    var db_name = "wotw";
    var db_version = "1.0.0";
    var db_desc = "Whispers_of_the_Wild";
    var db_size = 20000000;

    var database = null;

    this.getDB = function() {
        if (!database) {
            database = window.openDatabase(
                    db_name, db_version, db_desc, db_size);
        }
        return database;
    };

    var _getSQLCols = function(sql) {
        var cols = sql
                .substring(
                    (sql.indexOf("DISTINCT") === -1) ? 7 : 16,
                sql.indexOf(" FROM"))
                .replace(/ /g, '')
                .split(",");
        for (var x = 0; x < cols.length; x++) {
            if (cols[x].indexOf('.') !== -1) {
                cols[x] = cols[x].substring(cols[x].indexOf('.')+1);
            }
        }
        return cols;
    };

    this.dbQuery = function(sql, params, onResults) {
        var cols = _getSQLCols(sql);
        this.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            sql, params,
                            function(tx, results) {
                                if (cols == null) {
                                    cols = [];
                                }
                                var ret = "{\"results\":[";
                                for (var i = 0; i < results.rows.length; i++){
                                    var row = results.rows.item(i);

                                    if (i > 0) {
                                        ret += ",";
                                    }

                                    ret += "{";
                                    for (var j = 0; j < cols.length; j++) {
                                        var col = cols[j];
                                        if (j > 0) {
                                            ret += ",";
                                        }
                                        ret += "\"" + col + "\":" + (row[col]
                                                ? "\"" + row[col] + "\"" : "null");
                                    }
                                    ret += "}";
                                }
                                ret += "]}";
                                if (onResults) {
                                    onResults(ret);
                                }
                            },
                            function(tx, error) {
                                alert("SQL Error: " + error.code + ", " + error.message);
                                console.log('Error: ' + sql);
                            }
                    );
                },
                function(tx, error) {
                    alert("SQL Tx Error: " + error + ", " + error);
                }
        );
    };

    this.init = function() {
        this.getDB().transaction(
                function(tx) {
//                    tx.executeSql("DELETE FROM ANM_Animal");

                    tx.executeSql("DROP TABLE IF EXISTS ANM_Animal");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Animal "
                            + "(animalID INTEGER PRIMARY KEY UNIQUE, "
                            + "category TEXT, "
                            + "name TEXT, cautionNotice TEXT, "
                            + "iconFilePath TEXT, "
                            + "isFree BOOLEAN, isEarned BOOLEAN, "
                            + "isPaid BOOLEAN, score INT)");

//                    tx.executeSql("DELETE FROM ANM_Image");
                    tx.executeSql("DROP TABLE IF EXISTS ANM_Image");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Image "
                            + "(imageID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "imageName TEXT, filePath TEXT)");

//                    tx.executeSql("DELETE FROM ANM_Profile");
                    tx.executeSql("DROP TABLE IF EXISTS ANM_Profile");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Profile "
                            + "(profileID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "idPointers TEXT, "
                            + "gestation TEXT, "
                            + "lifespan TEXT, "
                            + "diet TEXT, "
                            + "habitat TEXT, "
                            + "lengthMaleMin DOUBLE, lengthMaleMax DOUBLE, "
                            + "lengthFemaleMin DOUBLE, lengthFemaleMax DOUBLE, "
                            + "weightMaleMin DOUBLE, weightMaleMax DOUBLE, "
                            + "weightFemaleMin DOUBLE, weightFemaleMax DOUBLE)");

//                    tx.executeSql("DELETE FROM ANM_Audio");
                    tx.executeSql("DROP TABLE IF EXISTS ANM_Audio");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Audio "
                            + "(audioID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "trackName TEXT, duration INTEGER, filePath TEXT)");

//                    tx.executeSql("DELETE FROM ANM_Map");
                    tx.executeSql("DROP TABLE IF EXISTS ANM_Map");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Map "
                            + "(mapID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "mapName TEXT, filePath TEXT)");

//                    tx.executeSql("DELETE FROM ANM_Footprint");
                    tx.executeSql("DROP TABLE IF EXISTS ANM_Footprint");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Footprint "
                            + "(footprintID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "footprintName TEXT, filePath TEXT)");
                },
                function(error) {
                    alert("SQL Error Creating Tables: " + error.code + ", " + error.message);
                },
                function() {
                    // do nothing
                }
        );
    };
}
