function Datastore() {
    var db_name = "wotw";
    var db_version = "1.0.0";
    var db_desc = "Whispers of the Wild";
    var db_size = 20000000;

    var database = null;

    this.getDB = function() {
        if (!database) {
            database = window.openDatabase(
                    this.db_name, this.db_version, this.db_desc, this.db_size);
        }
        return database;
    };

}
