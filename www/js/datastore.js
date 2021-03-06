function Datastore() {
    var db_name = "wotw";
    var db_version = "1.0.0";
    var db_desc = "Whispers_of_the_Wild";
    var db_size = 20000000;

    var database = null;
    var drop_and_create_tables = false;

    this.getDB = function () {
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
                cols[x] = cols[x].substring(cols[x].indexOf('.') + 1);
            }
        }
        return cols;
    };

    this.checkDatabaseExists = function(model, onExists, onNotExists) {
        this.getDB().transaction(
                function (tx) {
                    tx.executeSql("SELECT COUNT(animalID) AS num FROM ANM_Animal", null,
                            function(tx, results) {
                                if (results.rows.length > 0) {
                                    var row = results.rows.item(0);
                                    if (onExists && row.num > 0) {
                                        // check data version
                                        app.view.getProperty('dataVersion', function(results) {
                                            var currentDataVersion = (results && results[0]) ? results[0].value : null;
                                            if (currentDataVersion != app.dataVersion) {
                                                console.log("Found data version update [" + currentDataVersion + " vs " + app.dataVersion + "]");
                                                model.data.updateDataVersion();
                                                onNotExists(model);
                                            } else {
                                                onExists(model);
                                            }
                                        });

                                    } else if (onNotExists) {
                                        onNotExists(model);
                                    }
                                }
                            });
                },
                function (error) {
                    if (onNotExists) {
                        onNotExists(model);
                    }
                },
                function () {
                    // do nothing
                }
        );
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

                                var insert = (sql.indexOf("INSERT") != -1);
                                var ret = "{" + (insert ? "\"insertId\":\"" + results.insertId + "\", " : "")
                                        + "\"results\":[";
                                for (var i = 0; i < results.rows.length; i++) {
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
                    alert("SQL Tx Error: " + error + ", " + error + ", SQL: " + sql + ", Params: " + params);
                }
        );
    };

    this.updateDataVersion = function() {
        this.getDB().transaction(
                function (tx) {
                    tx.executeSql("DELETE FROM SYS_Property WHERE property = 'dataVersion'");
                    tx.executeSql("INSERT INTO SYS_Property (property, value) VALUES ('dataVersion', '" + app.dataVersion + "')");
                },
                function (error) {
                    alert("SQL Error Inserting into tables: " + error.code + ", " + error.message);
                },
                function () {
                    // do nothing
                }
        );
    };

    this.createDefaultProperties = function() {
        this.getDB().transaction(
                function (tx) {
                    tx.executeSql("INSERT INTO SYS_Property (property, value) VALUES ('dataVersion', '0')");
                    tx.executeSql("INSERT INTO SYS_Property (property, value) VALUES ('unlocked', 'false')");
                    tx.executeSql("INSERT INTO SYS_Property (property, value) VALUES ('mode', '" + app.mode + "')");
                    tx.executeSql("INSERT INTO SYS_Property (property, value) VALUES ('registered', 'false')");
                },
                function (error) {
                    alert("SQL Error Inserting into tables: " + error.code + ", " + error.message);
                },
                function () {
                    // do nothing
                }
        );
    };

    this.init = function (dropData) {
        if (dropData) {
            drop_and_create_tables = true;
        }

        this.getDB().transaction(
                function (tx) {
                    // tx.executeSql("DROP TABLE IF EXISTS SYS_Property"); /* Dont drop or we will losing the app mode */
                    tx.executeSql("CREATE TABLE IF NOT EXISTS SYS_Property "
                            + "(propertyID INTEGER PRIMARY KEY UNIQUE, "
                            + "property TEXT, "
                            + "value TEXT)");

                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Animal");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Animal "
                            + "(animalID INTEGER PRIMARY KEY UNIQUE, "
                            + "category TEXT, "
                            + "name TEXT, thumbName TEXT, commonNames TEXT, cautionNotice TEXT, "
                            + "iconFilePath TEXT, "
                            + "isFree BOOLEAN, isEarned BOOLEAN, "
                            + "isPaid BOOLEAN, score INT)");

                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Name");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Name "
                            + "(nameID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "name TEXT)");

                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Category");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Category "
                            + "(nameCategoryID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "category TEXT)");

//                    tx.executeSql("DELETE FROM ANM_Image");
                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Image");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Image "
                            + "(imageID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "imageName TEXT, filePath TEXT)");

//                    tx.executeSql("DELETE FROM ANM_Profile");
                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Profile");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Profile "
                            + "(profileID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "idPointers TEXT, "
                            + "randomFacts TEXT, "
                            + "confusedWith TEXT, "
                            + "activityPeriod TEXT, "
                            + "gestation TEXT, "
                            + "lifespan TEXT, "
                            + "diet TEXT, "
                            + "predators TEXT, "
                            + "habitat TEXT, "
                            + "redListStatus TEXT, "
                            + "population TEXT, "
                            + "threats TEXT, "
                            + "length TEXT, "
                            + "height TEXT, "
                            + "weight TEXT, "
                            + "soundPath TEXT, "
                            + "soundDuration INTEGER)");

//                    tx.executeSql("DELETE FROM ANM_Audio");
                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Audio");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Audio "
                            + "(audioID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "trackName TEXT, duration INTEGER, filePath TEXT)");

//                    tx.executeSql("DELETE FROM ANM_Map");
                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Map");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Map "
                            + "(mapID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "mapName TEXT, filePath TEXT)");

//                    tx.executeSql("DELETE FROM ANM_Footprint");
                    if (drop_and_create_tables) tx.executeSql("DROP TABLE IF EXISTS ANM_Footprint");
                    tx.executeSql("CREATE TABLE IF NOT EXISTS ANM_Footprint "
                            + "(footprintID INTEGER PRIMARY KEY UNIQUE, "
                            + "animalID INTEGER, "
                            + "footprintName TEXT, filePath TEXT)");
                },
                function(error) {
                    console.log("SQL Error Creating Tables: " + error.code + ", " + error.message);
                },
                function() {
                    // do nothing
                }
        );
    };
}
