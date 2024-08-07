"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.getElementById('loginForm').addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = {
        username: formData.get('username'),
        password: formData.get('password')
    };
    try {
        const response = yield fetch('YOUR_LOGIN_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        // if (!response.ok) {
        //     throw new Error('Login failed');
        // }
        const result = yield response.json();
        // if (result.success) {
        if (credentials.username == 'Rag123' && credentials.password == '12345') {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('jewelryForm').classList.remove('hidden');
        }
        else {
            alert('Invalid username or password');
        }
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to login');
    }
}));
document.getElementById('jewelryForm').addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        address: formData.get('address'),
        month: formData.get('month'),
        date: formData.get('date'),
        installment: formData.get('installment'),
        signature: formData.get('signature')
    };
    try {
        const response = yield fetch('YOUR_API_ENDPOINT', {
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
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to save data');
    }
}));
