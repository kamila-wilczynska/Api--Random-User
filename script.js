function displayThreeRandomUsers() {
	fetch('https://randomuser.me/api/?results=10')
		.then(response => response.json())
		.then(data => {
			const users = data.results;

			// Select the container where the users will be displayed
			const userContainer = document.getElementById('user-container');

			// Loop over every user and display information
			users.forEach((user) => {
				const firstName = user.name.first;
				const lastName = user.name.last;
				const fullName = firstName + ' ' + lastName;
				const age = user.dob.age;
				const imageUrl = user.picture.large;

				// Create elements for user information
				const userDiv = document.createElement('div');
				userDiv.classList.add('user');

				const textParagraph = document.createElement('p');
				textParagraph.textContent = fullName;

				const ageParagraph = document.createElement('p');
				ageParagraph.textContent = `age: ${age}`;


				const imageElement = document.createElement('img');
				imageElement.src = imageUrl;

				// Append elements to the user container
				userDiv.appendChild(textParagraph);
				userDiv.appendChild(ageParagraph)
				userDiv.appendChild(imageElement);
				userContainer.appendChild(userDiv);
			});
		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});
}


displayThreeRandomUsers();
