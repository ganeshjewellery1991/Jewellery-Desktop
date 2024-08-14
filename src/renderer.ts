
document.getElementById('loginForm')!.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const credentials = {
        username: formData.get('username'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('YOUR_LOGIN_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        // if (!response.ok) {
        //     throw new Error('Login failed');
        // }

        const result = await response.json();
        // if (result.success) {
       if(credentials.username=='Rag123' && credentials.password=='12345'){
            document.getElementById('loginForm')!.classList.add('hidden');
            document.getElementById('jewelryForm')!.classList.remove('hidden');
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to login');
    }
});

document.getElementById('jewelryForm')!.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
        name: formData.get('name'),
        address: formData.get('address'),
        month: formData.get('month'),
        date: formData.get('date'),
        installment: formData.get('installment'),
        signature: formData.get('signature')
    };

    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        alert('Data saved successfully');
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to save data');
    }
});
