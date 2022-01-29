window.onload = function () {
	let editBtns = document.getElementsByClassName("edit-btn");
	let form = document.getElementById("contact-form");
	let resetBtn = document.getElementById("reset-btn");
	let subBtn = document.getElementsByClassName("sub-btn")[0];
	[...editBtns].forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			resetBtn.classList.remove("d-none");
			let { name, phone, email, id } = e.target.dataset;
			form[0].value = name;
			form[1].value = phone;
			form[2].value = email;
			form[3].value = id;
			subBtn.innerHTML = "Update<i class='fas fa-user-edit pl-2'></i>";
		});
	});
	resetBtn.addEventListener("click", function (e) {
		e.target.classList.add("d-none");
		subBtn.innerHTML = "Submit<i class='fas fa-paper-plane pl-2'></i>";
	});
};
