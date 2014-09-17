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
        return sql
                .substring(7, sql.indexOf(" FROM"))
                .replace(/ /g, '')
                .split(",");
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
                    tx.executeSql("DROP TABLE IF EXISTS ANM_Animal");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Animal "
                            + "(animalID INTEGER PRIMARY KEY UNIQUE, "
                            + "name TEXT, cautionNotice TEXT, isFree BOOLEAN, isEarned BOOLEAN, isPaid BOOLEAN)");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Baboon')");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Elephant')");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Lion')");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Leopard')");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Buffalo')");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Giraffe')");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Rhino')");
                    tx.executeSql("INSERT INTO ANM_Animal (name) VALUES ('Crocodile')");

                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Image "
                            + "(imageID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "imageName TEXT, filePath TEXT)");

                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Profile "
                            + "(profileID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "idPointers TEXT, "
                            + "lengthMaleMin INTEGER, lengthMaleMax INTEGER, "
                            + "lengthFemaleMin INTEGER, lengthFemaleMax INTEGER, "
                            + "weightMaleMin INTEGER, weightMaleMax INTEGER, "
                            + "weightFemaleMin INTEGER, weightFemaleMax INTEGER)");

                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Audio "
                            + "(audioID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "trackName TEXT, filePath TEXT)");

                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Map "
                            + "(mapID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "mapName TEXT, filePath TEXT)");

                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Footprint "
                            + "(footprintID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "footprintName TEXT, filePath TEXT)");
                },
                function(error) {
                    alert("SQL Error Creating Tables: " + error.code + ", " + error.message);
                },
                function() {
                    // alert("Success creating tables...")
                }
        );
    };
}
