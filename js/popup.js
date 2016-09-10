<script>
    var link = document.querySelector(".open-modal");
		
    var popup = document.querySelector(".modal");
		
  	var close = popup.querySelector(".modal-content-close");
		
  	var form = document.querySelector(".write-us-form");
  	var username = form.querySelector("#username");
		
  	var storage = localStorage.getItem("username");

		link.addEventListener("click", function(event) {
		 event.preventDefault();
		 popup.classList.add("modal-content-show");

		 if (storage) {
			username.value = storage;
		 } else {
			username.focus();
		 }
		});

		close.addEventListener("click", function(event) {
		 event.preventDefault();
		 popup.classList.remove("modal-content-show");
		 popup.classList.remove("modal-error");
		});
		
		form.addEventListener("submit", function(event) {
		 if (!username.value || !email.value || !message.value) {
			event.preventDefault();
			console.log("Нужно ввести имя пользователя, имейл и текст сообщения");
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		 } else {
			localStorage.setItem("username", username.value);
		 }
		});

		window.addEventListener("keydown", function(event) {
		 if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
			 popup.classList.remove("modal-content-show");
			 popup.classList.remove("modal-error");
			}
		 }
		});
	</script>