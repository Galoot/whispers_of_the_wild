function Server() {
    this.hostname = 'http://www.galoot.co.za/whispers-reg';

    this.reg_name = '';
    this.reg_email = '';
    this.reg_vendor = '';

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

    this.register = function() {
        var name = this.reg_name;
        var email = this.reg_email;
        var vendor = this.reg_vendor;

        if (name == '') {
            alert('Please supply a valid name.');
            console.log('no valid name');
        } else if (email == '') {
            alert('Please supply a valid email.');
        } else if (vendor == '') {
            alert('Please supply a valid vendor.');
        } else {
            $.pgwModal('close');
            this.submitRegistration(name, email, vendor,
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
                        + "<option value=''>-- SELECT ONE --</option>"
                        + "<option value='Our website'>Our website</option>"
                        + "<option value='Social Media'>Social Media</option>"
                        + "<option value='Browsing the app store'>Browsing the app store</option>"
                        + "<option value='Media'>Media</option>"
                        + "<option value='Word of mouth'>Word of mouth</option>"
                        + "<optgroup label='One of out vendors:'>";
            data.forEach(function(d) {
                selectHtml += "<option value='" + d + "'>" + d + "</option>";
            });
            selectHtml += "</optgroup>";
            selectHtml += "</select>";

            var selectDiv = $('#reg_vendor_div');
            selectDiv.html(selectHtml);

            app.view.modal('registrationMessage');
        }, function() {
            var selectHtml =
                    "<select id='reg_vendor' onChange='app.server.reg_vendor = this.value;'>"
                        + "<option value=''>-- SELECT ONE --</option>"
                        + "<option value='Our website'>Our website</option>"
                        + "<option value='Social Media'>Social Media</option>"
                        + "<option value='Browsing the app store'>Browsing the app store</option>"
                        + "<option value='Media'>Media</option>"
                        + "<option value='Word of mouth'>Word of mouth</option>"
            selectHtml += "</select>";
            var selectDiv = $('#reg_vendor_div');
            selectDiv.html(selectHtml);

            app.view.modal('registrationMessage');
        });
    };

    this.checkRegistered = function() {
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
    };


}