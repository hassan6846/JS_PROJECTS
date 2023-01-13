var noble = require("noble");

noble.on('stateChange', function(state) {
    if (state === 'poweredOn') {
        noble.startScanning();
    } else {
        noble.stopScanning();
    }
});

noble.on('discover', function(peripheral) {
    console.log('Found device with local name: ' + peripheral.advertisement.localName);
    console.log('advertising the following service uuid\'s: ' + peripheral.advertisement.serviceUuids);

    if (peripheral.address === 'your device address') {
        noble.stopScanning();

        peripheral.connect(function(error) {
            console.log('connected to peripheral: ' + peripheral.uuid);

            peripheral.discoverServices(['your service uuid'], function(error, services) {
                var deviceInformationService = services[0];
                console.log('discovered device information service');

                deviceInformationService.discoverCharacteristics(null, function(error, characteristics) {
                    console.log('discovered the following characteristics:');
                    for (var i in characteristics) {
                        console.log('  ' + i + ' uuid: ' + characteristics[i].uuid);
                    }
                });
            });
        });
    }
});
