function CoreData() {

    /**
     * Creates the core table structures
     * @param {boolean} dropTables boolean indicating if the core structures should be dropped.
     * @param {boolean} createTables boolean indicating if the core structures should be created.
     * @returns {undefined}
     */
    this.createCore = function(dropTables, createTables) {
        mobile.data.getDB().transaction(
                function(tx) {
                    populateDB(tx, dropTables, createTables);
                },
                function(tx, error) {
                    alert("SQL Error Creating Tables: " + error + ", " + error);
                },
                function() {
                    // Do nothing yet
                });
    };

    this.getSettings = function(returnCB) {
        var json = "";
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql("SELECT settingID, wsdlURL, lastSyncDate FROM MBL_Setting", [],
                            function(tx, results) {
                                for (var i = 0; i < results.rows.length; i++) {
                                    var row = results.rows.item(i);

                                    if (i > 0) {
                                        json += ", ";
                                    }
                                    json += "{"
                                            + "\"settingID\":\"" + row.settingID + "\","
                                            + "\"wsdlURL\":\"" + row.wsdlURL + "\","
                                            + "\"lastSyncDate\":\"" + row.lastSyncDate + "\"}";
                                    break;
                                }

                                returnCB(json != "" ? jQuery.parseJSON(json) : null);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: Error selecting settings: " + error);
                },
                function(tx) {
//                    alert("Core: Success with getSettings transaction");
                });
    };

    this.saveSettings = function(url, lastSyncDate, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql("DELETE FROM MBL_Setting");
                    tx.executeSql("INSERT INTO MBL_Setting "
                            + "(wsdlURL, lastSyncDate) "
                            + "VALUES (?, ?)",
                            [url, lastSyncDate],

                            function(tx, results) {
                                returnCB("Rows affected: " + results.rowsAffected);
                            },
                            function(tx, error) {
                                alert("Core: SQL Error inserting WSDL: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error inserting WSDL: " + error + ", " + error);
                },
                function(tx) {
//                    alert("Core: Added WSDL!");
                }
        );
    };

    this.setLogin = function(username, userID, sessionID, lastValidated, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql("DELETE FROM MBL_Login");
                    if (username && userID && sessionID) {
                        tx.executeSql("INSERT INTO MBL_Login "
                                + "(username, userID, sessionID, lastValidated) "
                                + "VALUES (?, ?, ?, ?)",
                                [username, userID, sessionID, lastValidated],

                                function(tx, results) {
                                    if (returnCB) {
                                        returnCB("Rows affected: " + results.rowsAffected);
                                    }
                                }
                        );
                    }
                },
                function(tx, error) {
                    alert("Core: SQL Error inserting WSDL: " + error.code + ", " + error.message);
                },
                function(tx) {
//                    alert("Core: Added WSDL!");
                }
        );
    };

    this.getLogin = function(returnCB) {
        var ret = "";
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql("SELECT username, userID, sessionID, lastValidated FROM MBL_Login", [],
                            function(tx, results) {
                                for (var i = 0; i < results.rows.length; i++){
                                    var row = results.rows.item(i);

                                    if (i > 0) {
                                        ret += ", ";
                                    }
                                    ret += "{"
                                            + "\"username\":\"" + row.username + "\","
                                            + "\"userID\":\"" + row.userID + "\","
                                            + "\"sessionID\":\"" + row.sessionID + "\","
                                            + "\"lastValidated\":\"" + row.lastValidated + "\"}";
                                    break;
                                }
                                if (returnCB && ret.length > 0) {
                                    returnCB(jQuery.parseJSON(ret));
                                } else {
                                    returnCB();
                                }
                            },
                            function(tx, error) {
                                alert("SQL Error: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: Error selecting settings: " + error);
                },
                function(tx) {
//                    alert("Core: Success with getSettings transaction");
                });
    };

    this.addConfiguration = function(configuration, callback) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            "INSERT INTO MBL_Configuration "
                            + "(componentID, pkFieldID, pull, push, syncOrder) "
                            + "VALUES (?, ?, ?, ?, ?)",

                            [configuration.getComponentID(), configuration.getPKFieldID(),
                                configuration.getPull(), configuration.getPush(), configuration.getSyncOrder()],

                            function(tx, results) {
                                if (callback) {
                                    callback("{"
                                            + "\"configurationID\":" + results.insertId
                                            + ",\"rowsAffected\":" + results.rowsAffected
                                            + "}");
                                }
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Error inserting MBL_Entry: " + error + ", " + error);
                }
        );
    };

    this.addEntry = function(componentID, remoteID, sync, lock, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            "INSERT INTO MBL_Entry "
                            + "(componentID, remoteID, sync, lock) "
                            + "VALUES (?, ?, ?, ?)",

                            [componentID, remoteID, sync, lock],

                            function(tx, results) {
                                if (returnCB) {
                                    returnCB("{"
                                            + "\"entryID\":" + results.insertId
                                            + ",\"rowsAffected\":" + results.rowsAffected
                                            + ",\"componentID\":" + componentID
                                            + ",\"remoteID\":" + remoteID
                                            + ",\"sync\":" + sync
                                            + ",\"lock\":" + lock
                                            + "}");
                                }
                            },
                            function(tx, error) {
                                alert("Core: SQL Error inserting MBL_Entry: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error inserting MBL_Entry: " + error + ", " + error);
                }
        );
    };

    this.dataExists = function(entryID, fieldID, callback) {
        queryData("SELECT dataID, entryID, fieldID, value, pkFieldID FROM MBL_Data "
                + "WHERE entryID = ? AND fieldID = ?", [], [entryID, fieldID], callback);
    };

    this.addData = function(entryID, fieldID, value, pkFieldID, returnCB) {
        if (typeof pkFieldID === "undefined") {
            pkFieldID = null;
        }

        this.dataExists(entryID, fieldID,
                function(callback) {
                    var existingDataID = null;
                    if (callback) {
                        var json = jQuery.parseJSON(callback);
                        if (json && json.data && json.data.length > 0) {
                            existingDataID = json.data[0].dataID;
                        }
                    }

                    if (existingDataID) {
                        mobile.data.getDB().transaction(
                                function(tx) {
                                    tx.executeSql(
                                            "UPDATE MBL_Data SET value = ?, pkFieldID = ? \n\
                                            WHERE dataID = ?",

                                            [value, pkFieldID, existingDataID],

                                            function(tx, results) {
                                                if (returnCB) {
                                                    returnCB("{"
                                                            + "\"dataID\":" + existingDataID
                                                            + ",\"rowsAffected\":" + results.rowsAffected
                                                            + "}");
                                                }
                                            },
                                            function(tx, error) {
                                                alert("Core: SQL Error inserting MBL_Data: " + error.code + ", " + error.message);
                                            }
                                    );
                                },
                                function(tx, error) {
                                    alert("Core: SQL Tx Error inserting MBL_Data: " + error.code + ", " + error.message);
                                }
                        );
                    } else {
                        mobile.data.getDB().transaction(
                                function(tx) {
                                    tx.executeSql(
                                            "INSERT INTO MBL_Data "
                                            + "(entryID, fieldID, value, pkFieldID) "
                                            + "VALUES (?, ?, ?, ?)",

                                            [entryID, fieldID, value, pkFieldID],

                                            function(tx, results) {
                                                if (returnCB) {
                                                    returnCB("{"
                                                            + "\"dataID\":" + results.insertId
                                                            + ",\"rowsAffected\":" + results.rowsAffected
                                                            + ",\"entryID\":" + entryID
                                                            + ",\"fieldID\":" + fieldID
                                                            + ",\"value\":\"" + value + "\""
                                                            + ",\"pkFieldID\":" + pkFieldID
                                                            + "}");
                                                }
                                            },
                                            function(tx, error) {
                                                alert("Core: SQL Error inserting MBL_Data: " + error.code + ", " + error.message);
                                            }
                                    );
                                },
                                function(tx, error) {
                                    alert("Core: SQL Tx Error inserting MBL_Data: " + error.code + ", " + error.message);
                                }
                        );
                    }
                });
    };

    this.updateData = function(dataID, value, callback) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            "UPDATE MBL_Data SET value = ? WHERE dataID = ?", [value, dataID],
                            function(tx, results) {
                                if (callback) {
                                    callback("{"
                                            + "\"dataID\":" + dataID + ","
                                            + "\"value\":\"" + value + "\","
                                            + "\"rowsAffected\":" + results.rowsAffected
                                            + "}");
                                }
                            },
                            function(tx, error) {
                                alert("Core: SQL Error updating MBL_Data: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error updating MBL_Data: " + error.code + ", " + error.message);
                }
        );
    };

    this.clearData = function(returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    /*
                    tx.executeSql(
                            "DELETE FROM MBL_Configuration",
                            [],
                            function(tx, results) {
                                returnCB("{"
                                        + "\"table\":\"MBL_Configuration\","
                                        + "\"rowsAffected\":" + results.rowsAffected
                                        + "}");
                            },
                            function(tx, error) {
                                alert("Core: SQL Error deleteing MBL_Configuration: " + error.code + ", " + error.message);
                            }
                    );
                    */
                    tx.executeSql(
                            "DELETE FROM MBL_Entry",
                            [],
                            function(tx, results) {
                                returnCB("{"
                                        + "\"table\":\"MBL_Entry\","
                                        + "\"rowsAffected\":" + results.rowsAffected
                                        + "}");
                            },
                            function(tx, error) {
                                alert("Core: SQL Error deleteing MBL_Entry: " + error.code + ", " + error.message);
                            }
                    );
                    tx.executeSql(
                            "DELETE FROM MBL_Data",
                            [],
                            function(tx, results) {
                                returnCB("{"
                                        + "\"table\":\"MBL_Data\","
                                        + "\"rowsAffected\":" + results.rowsAffected
                                        + "}");
                            },
                            function(tx, error) {
                                alert("Core: SQL Error deleteing MBL_Data: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Error deleteing MBL_Data & MBL_Entry: " + error + ", " + error);
                }
        );
    };

    this.deleteEntries = function(componentID, excludeRemoteIDs) {
        var entryIDsSQL = "";
        for (var x = 0; x < excludeRemoteIDs.length; x++) {
            entryIDsSQL += excludeRemoteIDs[x];
            if (x < excludeRemoteIDs.length - 1) {
                entryIDsSQL += ",";
            }
        }

        var entrySQL = "DELETE FROM MBL_Entry WHERE entryID IN (\n\
                SELECT e.entryID FROM MBL_Entry e WHERE \n\
                    e.remoteID IS NOT NULL \n\
                    " + ((entryIDsSQL.trim()) ? "AND e.remoteID NOT IN (" + entryIDsSQL + ") " : "") + "\n\
                    AND e.componentID = ?)";

        var dataSQL = "DELETE FROM MBL_Data WHERE entryID IN (\n\
                SELECT e.entryID FROM MBL_Entry e WHERE \n\
                    e.remoteID IS NOT NULL \n\
                    " + ((entryIDsSQL.trim()) ? "AND e.remoteID NOT IN (" + entryIDsSQL + ") " : "") + "\n\
                    AND e.componentID = ?)";

        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(dataSQL, [componentID],
                            function(tx, results) {
                                if (results.rowsAffected > 0) {
                                    console.log("core-data - data deleted count: " + results.rowsAffected);
                                }
                            },
                            function(tx, error) {
                                console.log("core-data - data delete error: " + error.code + " " + error.message);
                            });
                    tx.executeSql(entrySQL, [componentID],
                            function(tx, results) {
                                if (results.rowsAffected > 0) {
                                    console.log("core-data - entry deleted count: " + results.rowsAffected);
                                }
                            },
                            function(tx, error) {
                                console.log("core-data - entry delete error: " + error.code + " " + error.message);
                            });
                }
        );
    };

    this.getAllComponents = function(callback) {
        new Configuration().getAllComponents(callback);
    };

    this.getPullComponents = function(callback) {
        new Configuration().getPullComponents(callback);
    };

    var queryEntry = function(sql, params, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            sql, params,
                            function(tx, results) {
                                var ret = "{\"entry\":[";
                                for (var i = 0; i < results.rows.length; i++){
                                    var row = results.rows.item(i);

                                    if (i > 0) {
                                        ret += ",";
                                    }
                                    ret += "{"
                                            + "\"entryID\":" + (row.entryID ? "\"" + row.entryID + "\"" : "null") + ","
                                            + "\"remoteID\":" + (row.remoteID ? "\"" + row.remoteID + "\"" : "null") + ","
                                            + "\"componentID\":" + (row.componentID ? "\"" + row.componentID + "\"" : "null") + ","
                                            + "\"sync\":" + row.sync + ","
                                            + "\"lock\":" + row.lock
                                            + "}";
                                }
                                ret += "]}";
                                if (returnCB) {
                                    returnCB(ret);
                                }
                            },
                            function(tx, error) {
                                alert("Core: SQL Error getting MBL_Entry: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error getting MBL_Entry: " + error + ", " + error);
                }
        );
    };

    var queryData = function(sql, cols, params, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            sql, params,
                            function(tx, results) {
                                if (cols == null || cols.length == 0) {
                                    cols = ["dataID", "entryID", "fieldID", "value", "pkFieldID"];
                                }
                                var ret = "{\"data\":[";
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
                                if (returnCB) {
                                    returnCB(ret);
                                }
                            },
                            function(tx, error) {
                                alert("Core: SQL Error getting MBL_Data: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error getting MBL_Data: " + error + ", " + error);
                }
        );
    };

    this.getAllEntries = function(componentID, callback) {
        var sql = "SELECT entryID, remoteID, componentID, sync, lock FROM MBL_Entry";
        var values = [];
        if (componentID != null) {
            sql += " WHERE componentID = ?";
            values.push(componentID);
        }

        queryEntry(sql, values, callback);
    };

    this.saveRemoteID = function(entryID, remoteID, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            "UPDATE MBL_Entry SET remoteID = ? WHERE entryID = ?", [remoteID, entryID],
                            function(tx, results) {
                                returnCB("{"
                                        + "\"table\":\"MBL_Entry\","
                                        + "\"action\":\"saveRemoteID=" + remoteID + ",entryID=" + entryID + "\","
                                        + "\"rowsAffected\":" + results.rowsAffected
                                        + "}");
                            },
                            function(tx, error) {
                                alert("Core: SQL Error getting MBL_Entry: " + error.code + ", " + error.message);
                                returnCB("Error...");
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error getting MBL_Entry: " + error + ", " + error);
                    returnCB("Error...");
                }
        );
    };

    this.setEntryLock = function(entry, lock, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            "UPDATE MBL_Entry SET lock = ? WHERE entryID = ?", [lock, entry.entryID],
                            function(tx, results) {
                                returnCB("{"
                                        + "\"table\":\"MBL_Entry\","
                                        + "\"action\":\"lock=" + lock + "\","
                                        + "\"rowsAffected\":" + results.rowsAffected
                                        + "}", entry);
                            },
                            function(tx, error) {
                                alert("Core: SQL Error getting MBL_Entry: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error getting MBL_Entry: " + error + ", " + error);
                }
        );
    };

    this.setEntrySync = function(entry, sync, returnCB) {
        mobile.data.getDB().transaction(
                function(tx) {
                    tx.executeSql(
                            "UPDATE MBL_Entry SET sync = ? WHERE entryID = ?", [sync, entry.entryID],
                            function(tx, results) {
                                returnCB("{"
                                        + "\"table\":\"MBL_Entry\","
                                        + "\"action\":\"sync=" + sync + "\","
                                        + "\"rowsAffected\":" + results.rowsAffected
                                        + "}", entry);
                            },
                            function(tx, error) {
                                alert("Core: SQL Error getting MBL_Entry: " + error.code + ", " + error.message);
                            }
                    );
                },
                function(tx, error) {
                    alert("Core: SQL Tx Error getting MBL_Entry: " + error + ", " + error);
                }
        );
    };

    /**
     * Get all entries fallggged for sync, with their config components flagged
     * for "push" synching.
     * @param {type} returnCB
     * @returns {undefined}
     */
    this.getSyncEntries = function(returnCB) {
        queryEntry(
                "SELECT et.entryID, et.remoteID, et.componentID, et.sync, et.lock \n\
                FROM MBL_Entry et \n\
                INNER JOIN MBL_Configuration cnf ON cnf.componentID = et.componentID \n\
                WHERE cnf.push = ? AND et.lock = ? AND et.sync = ? \n\
                ORDER BY et.entryID ASC",
                [1, CoreData.ENTRY_UNLOCKED, CoreData.ENTRY_SYNC], returnCB);
    };

    this.getAllData = function(returnCB) {
        queryData("SELECT dataID, entryID, fieldID, value, pkFieldID FROM MBL_Data", [], [], returnCB);
    };

    this.deleteEntry = function(entryID, successCallback, failureCallback) {
        if (entryID != null) {
            mobile.data.getDB().transaction(
                    function(tx) {
                        tx.executeSql(
                                "DELETE FROM MBL_Entry WHERE entryID = ?",
                                [entryID],
                                function(tx, results) {
                                    if (successCallback) {
                                        successCallback("{"
                                                + "\"rowsAffected\":" + results.rowsAffected
                                                + "}");
                                    }
                                }
                        );
                    }
            );
        }
    };

    this.deleteData = function(entryID, successCallback, failureCallback) {
        if (entryID != null) {
            mobile.data.getDB().transaction(
                    function(tx) {
                        tx.executeSql(
                                "DELETE FROM MBL_Data WHERE entryID = ?",
                                [entryID],
                                function(tx, results) {
                                    if (successCallback) {
                                        successCallback("{"
                                                + "\"rowsAffected\":" + results.rowsAffected
                                                + "}");
                                    }
                                }
                        );
                    }
            );
        }
    };

    this.getData = function(entryID, fieldID, callback) {
        queryData("SELECT dataID, entryID, fieldID, value FROM MBL_Data "
                + "WHERE entryID = ? AND fieldID = ?", [], [entryID, fieldID], callback);
    };

    this.filterData = function(sql, cols, params, callback) {
        queryData(sql, cols, params, callback);
    };

    this.getExistingEntry = function(componentID, remoteID, returnCB) {
        queryEntry("\
                SELECT DISTINCT \n\
                    et.entryID, et.remoteID, et.componentID, et.sync, et.lock\n\
                FROM MBL_Entry et \n\
                WHERE et.remoteID = ? AND et.componentID = ?",
                [remoteID, componentID], returnCB);
    };

    this.getDataSyncEntry = function(data, returnCB) {
        queryEntry("\
                SELECT DISTINCT \n\
                    et.entryID, et.remoteID, et.componentID, et.sync, et.lock\n\
                FROM MBL_Entry et \n\
                INNER JOIN MBL_Configuration cnf ON cnf.componentID = et.componentID\n\
                WHERE et.remoteID = ? AND cnf.pkFieldID = ?",
                [data.value, data.pkFieldID],
                function(output) {
                    returnCB(output, data);
                });
    };

    this.getEntrySyncData = function(entry, returnCB) {
        queryData("\
                SELECT \n\
                    dataID, dt.entryID, fieldID, \n\
                    (CASE WHEN et.remoteID IS NOT NULL THEN et.remoteID ELSE dt.value END) AS value, \n\
                    dt.pkFieldID \n\
                FROM MBL_Data dt \n\
                LEFT JOIN MBL_Entry et ON \n\
                    et.entryID = ( \n\
                    SELECT pkEnt.entryID FROM MBL_Entry pkEnt \n\
                    WHERE pkEnt.entryID = dt.value AND pkEnt.componentID = (\n\
                        SELECT pkCnf.componentID FROM MBL_Configuration pkCnf \n\
                        WHERE pkCnf.pkFieldID = dt.pkFieldID LIMIT 1 \n\
                    ) LIMIT 1 \n\
                ) \n\
                WHERE dt.entryID = ?", [], [entry.entryID],
                function(output) {
                    returnCB(output, entry);
                });
    };

    var populateDB = function(tx, dropTables, createTables) {
        if (dropTables) {
            tx.executeSql("DROP TABLE IF EXISTS MBL_Data");
            tx.executeSql("DROP TABLE IF EXISTS MBL_Entry");
            tx.executeSql("DROP TABLE IF EXISTS MBL_Configuration");
            tx.executeSql("DROP TABLE IF EXISTS MBL_Setting");
            tx.executeSql("DROP TABLE IF EXISTS MBL_Login");
        }

        if (createTables) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS MBL_Login "
                    + "(loginID INTEGER PRIMARY KEY UNIQUE, "
                    + "username TEXT, userID INTEGER, sessionID TEXT, lastValidated DATETIME)");

            tx.executeSql("CREATE TABLE IF NOT EXISTS MBL_Setting "
                    + "(settingID INTEGER PRIMARY KEY UNIQUE, "
                    + "wsdlURL TEXT, lastSyncDate DATETIME)");
//                    + "wsdlURL TEXT, lastSyncDate DATETIME DEFAULT (DATETIME('now','localtime')))");

            tx.executeSql("CREATE TABLE IF NOT EXISTS MBL_Configuration "
                    + "(configurationID INTEGER PRIMARY KEY UNIQUE, "
                    + "componentID INTEGER, pkFieldID INTEGER, pull BOOLEAN, push BOOLEAN, syncOrder INTEGER)");

            tx.executeSql("CREATE TABLE IF NOT EXISTS MBL_Entry "
                    + "(entryID INTEGER PRIMARY KEY UNIQUE, "
                    + "remoteID INTEGER, componentID INTEGER, sync BOOLEAN, lock BOOLEAN)");

            tx.executeSql("CREATE TABLE IF NOT EXISTS MBL_Data "
                    + "(dataID INTEGER PRIMARY KEY UNIQUE, "
                    + "entryID INTEGER, fieldID INTEGER, value TEXT, pkFieldID INTEGER)");

        }
    };

}

function RecordEntry() {
    this.componentID;
    this.entryID;
    this.remoteID;
    this.data;
    this.sync;
    this.lock;
};

function RecordData() {
    this.dataID;
    this.entryID;
    this.fieldID;
    this.value;
    this.pkFieldID;
};