window.onload = function() {
	var inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]')
	var submitBtn = document.querySelector('input[type="submit"]')
	var checkboxes = document.querySelectorAll('input[type="checkbox"]')
    
    submitBtn.disabled = true

    for (var i = 0; i < inputs.length; i++)
	    inputs[i].onkeyup = formValid

    for (var i = 0; i < checkboxes.length; i++)
	    checkboxes[i].onclick = formValid
	
	function formValid() {
		submitBtn.disabled = false
		
		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].value == '')
				submitBtn.disabled = true
		}

		for (var i = 0; i < checkboxes.length; i++) {
			if (!checkboxes[i].checked)
				submitBtn.disabled = true
		}
	}

};

document.querySelector('.wrap').style.display = "none";
