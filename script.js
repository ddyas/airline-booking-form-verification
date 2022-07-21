const form = document.getElementById('form');
const username1 = document.getElementById('username1');
const username2 = document.getElementById('username2');
const username3 = document.getElementById('username3');
const username4 = document.getElementById('username4');
const flyingFrom = document.getElementById('flying-from');
const flyingTo = document.getElementById('flying-to');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const roundTrip = document.getElementById('roundtrip');
const oneWay = document.getElementById('one-way');
const checkBox1 = document.getElementById('form-checkbox1');
const pass2Gender = document.getElementById("pass2-gender");
const pass2Radio1 = document.getElementById('pass2radio1');
const pass2Radio2 = document.getElementById('pass2radio2');
const pass1Gender = document.getElementById('pass1-gender');
const pass1Radio1 = document.getElementById('pass1radio1');
const pass1Radio2 = document.getElementById('pass1radio2');
const depDate = document.getElementById('dep-date');
const retDate = document.getElementById('ret-date');



form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	
	const usernameValue1 = username1.value.trim();
  const usernameValue2 = username2.value.trim();
  const usernameValue3 = username3.value.trim();
  const usernameValue4 = username4.value.trim();
  const flyingFromValue = flyingFrom.value.trim();
  const flyingToValue = flyingTo.value.trim();
	const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();


	if(usernameValue1 === '') {
		setErrorFor(username1, 'Username cannot be blank');
  } else if (usernameValue1.length < 6) {
    setErrorFor(username1, 'Enter more than 6 characters');
	} else {
		setSuccessFor(username1);
	}

  if(usernameValue2 === '') {
		setErrorFor(username2, 'Username cannot be blank');
  } else if (usernameValue2.length < 6) {
    setErrorFor(username2, 'Enter more than 6 characters');
	} else {
		setSuccessFor(username2);
	}

  if(usernameValue3 === '') {
		setErrorFor(username3, 'Username cannot be blank');
  } else if (usernameValue3.length < 6) {
    setErrorFor(username3, 'Enter more than 6 characters');
	} else {
		setSuccessFor(username3);
	}

  if(usernameValue4 === '') {
		setErrorFor(username4, 'Username cannot be blank');
  } else if (usernameValue4.length < 6) {
    setErrorFor(username4, 'Enter more than 6 characters');
	} else {
		setSuccessFor(username4);
	}

  if(flyingFromValue === '') {
		setErrorFor(flyingFrom, 'Starting location cannot be blank');
	} else {
		setSuccessFor(flyingFrom);
	}

  if(flyingToValue === '') {
		setErrorFor(flyingTo, 'Destination cannot be blank');
	} else {
		setSuccessFor(flyingTo);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

  if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be blank');
	} else if (isNaN(phoneValue)) {
		setErrorFor(phone, 'Phone can only contain numbers');
	} else {
		setSuccessFor(phone);
	}

  if(roundtrip.checked == false && oneWay.checked == false) {
		setErrorFor(checkBox1, 'Must select option');
	} else {
		setSuccessFor(checkBox1);
	}

  if(pass2Radio1.checked == false && pass2Radio2.checked == false) {
		setErrorFor(pass2Gender, 'Must select gender');
	} else {
		setSuccessFor(pass2Gender);
	}

  if(pass1Radio1.checked == false && pass1Radio2.checked == false) {
		setErrorFor(pass1Gender, 'Must select gender');
	} else {
		setSuccessFor(pass1Gender);
	}

  if(depDate.value === ''){
    setErrorFor(depDate, 'Must enter departure date');
  } else {
    setSuccessFor(depDate);
  }

  if(retDate.value === ''){
    setErrorFor(retDate, 'Must enter return date');
  } else {
    setSuccessFor(retDate);
  }


}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-group success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
