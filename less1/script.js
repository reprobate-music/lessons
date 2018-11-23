function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function checkAge() {
		let age = prompt("Сколько вам лет?");
		if (age >= 18) {
			alert("Доступ разрешен!");

			function showSkills() {
				let skills = ["html", "css", "photoshop"];

				for (let i = 0; i < skills.length; i++) {
					document.write("Я владею " + skills[i] + "<br>");
				}
			}
			showSkills();
			function calcPow() {
				let num = prompt("Введите число")
				let result = Math.pow(num,2);
				alert(num + " в квадрате равно " + result);
			}
			calcPow();
		} else {
			alert("Доступ закрыт!");
			document.write("Извините доступ закрыт");
		}
	}

	checkAge();

}

myFirstApp("Evgeniy");