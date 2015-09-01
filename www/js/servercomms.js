function Server() {
    this.hostname = 'http://www.galoot.co.za/whispers-reg';

    this.getSuppliers = function(onSuccess, onFailure) {
        var vendors = [];
        var request = $.getJSON(this.hostname + '/suppliers.php');
        request.done(function(data) {
            if (data) {
                data.forEach(function(d) {
                    vendors.push(d.vendor);
                });
            }
            if (onSuccess) {
                onSuccess(vendors);
            }
        });
        request.fail(function() {
            if (onFailure) {
                onFailure();
            }
        });
    };

    this.submitRegistration = function(name, email, vendor, onSuccess, onFailure) {
        var registrationID = null;

        var request = $.ajax({
            url: this.hostname + '/register.php',
            type: 'post',
            data: {
                'name'  : name,
                'email' : email,
                'vendor': vendor
            }
        });
        request.done(function(data) {
            if (data) {
                registrationID = jQuery.parseJSON(data).id;
            }
            if (onSuccess) {
                onSuccess(registrationID);
            }
        });
        request.fail(function() {
            if (onFailure) {
                onFailure();
            }
        });
    };
}