function Server() {
    this.hostname = 'http://www.galoot.co.za/whispers-reg';

    this.reg_name = '';
    this.reg_email = '';
    this.reg_vendor = '';
    this.reg_details = '';

    this.partnerOptions = ['Our FB post',
            'Our Twitter post',
            'Our Instagram post',
            'Africa Geographic Advert',
            'A friend on social media',
            'Browsing the app store',
            'Browsing Google',
            'TV (write details below)',
            'Radio (write details below)',
            'Print media (Write details below)',
            'Word of mouth',
            'A flyer (please state where)',
            'Other (write details below)'];

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

    this.submitRegistration = function(name, email, vendor, details, onSuccess, onFailure) {
        var registrationID = null;

        var request = $.ajax({
            url: this.hostname + '/register.php',
            type: 'post',
            data: {
                'name'      : name,
                'email'     : email,
                'vendor'    : vendor,
                'details'   : details
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

    this.register = function() {
        var name = this.reg_name;
        var email = this.reg_email;
        var vendor = this.reg_vendor;
        var details = this.reg_details;

        if (name == '') {
            alert('Please supply a valid name.');
            console.log('no valid name');
        } else if (email == '' || !isValidEmailAddress(email)) {
            alert('Please supply a valid email.');
        } else if (vendor == '') {
            alert('Please supply a valid vendor.');
        } else {
            $.pgwModal('close');
            this.submitRegistration(name, email, vendor, details,
                    function(regId) {
                        console.log('registrationID:' + regId);

                        app.view.setProperty('registered', regId, function() {
                            app.view.modal('successRegisterMessage');
                        });
                    },
                    function() {
                        app.view.modal('failRegisterMessage');
                    });
        }
    };

    this.showRegistration = function() {
        this.getSuppliers(function(data) {
            console.log(data);

            var selectHtml =
                    "<select id='reg_vendor' onChange='app.server.reg_vendor = this.value;'>"
                        + "<option value=''>-- SELECT ONE --</option>";

            selectHtml += "<optgroup label='One of our partners:'>";
            var partners = "";
            data.forEach(function(d) {
                partners += "<option value='" + d + "'>" + d + "</option>";
            });
            if (partners == "") {
                partners += "<option value=''>-</option>";
            }
            selectHtml += partners;
            selectHtml += "</optgroup>";

            for (var p = 0; p < app.server.partnerOptions.length; p++) {
                selectHtml += "<option value='" + app.server.partnerOptions[p] + "'>" + app.server.partnerOptions[p] + "</option>";
            }
            selectHtml += "</select>";

            var selectDiv = $('#reg_vendor_div');
            selectDiv.html(selectHtml);

            app.view.modal('registrationMessage');
        }, function() {
            var selectHtml =
                    "<select id='reg_vendor' onChange='app.server.reg_vendor = this.value;'>"
                        + "<option value=''>-- SELECT ONE --</option>";
            for (var p = 0; p < app.server.partnerOptions.length; p++) {
                selectHtml += "<option value='" + app.server.partnerOptions[p] + "'>" + app.server.partnerOptions[p] + "</option>";
            }
            selectHtml += "</select>";
            var selectDiv = $('#reg_vendor_div');
            selectDiv.html(selectHtml);

            app.view.modal('registrationMessage');
        });
    };

    this.checkRegistered = function() {
        if (app.mode == app.MODE_PAID) {
            app.view.getProperty('registered', function(results) {
                if (results && results[0] && results[0].value) {
                    var registered = results[0].value;

                    if (registered == 'false') {
                        console.log('Not yet Registered');
                        app.server.showRegistration();
                    } else {
                        console.log('Registered...');
                    }
                } else {
                    console.log('Not event Registered');
                    app.view.addProperty('registered', 'false');
                    app.server.showRegistration();
                }
            });
        }
    };


}