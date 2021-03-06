function ft_wait_elem(type, name, parent, callback, args = [], tries = 100) {
	var needle;
	var elem;
	var counter = 0;
	var handler = {
		'id_name': function() {
			needle = document.getElementById(name);
			return (needle != null);
		},
		'class_name': function() {
			needle = parent.getElementsByClassName(name);
			console.log('Class' + needle);
			return (needle != null && needle.length > 0);
		},
		'tag_name': function() {
			needle = parent.getElementsByTagName(name);
			console.log(needle);
			return (needle != null && needle.length > 0);
		}
	};

	if (!type || !name || type == '' || name == '' || !parent || !callback) {
		console.log("Wait Elem:\nError! Type = " + type + " Name = " + name + "Callback is: " + callback);
		return (true);
	}
	var interval_id = setInterval(function() {
		if (counter > tries) {
			console.log("Wait Elem!\nError: Unable to find element\nType = " + type + " Name = " + name);
			if (callback)
				callback(args);
		}
		if (handler[type]()) {
			clearInterval(interval_id);
			callback(args);
		}
		counter++;
	}, 100);
}