var store = require("TiStore/tistore");

// using 284910350 as an example app - app version is 6.4.2 so 
// it should pop-up to say a new version is available.

store.checkForAppUpdate('284910350', function(version) {
	var dialog = Ti.UI.createAlertDialog({
		view : 0,
		buttonNames : ['View', 'Cancel'],
		message : 'An app update is available. Download?',
		title : 'Version ' + version + ' available.'
	});
	
	dialog.addEventListener('click', function(e) {
		if (e.index === e.source.view) {
			store.openAppPage('284910350');
		}
	});
		
	dialog.show();
});
