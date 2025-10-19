import api from "./axios.config.js";


async function getAllUsers() {

    try {
        
        const res = await api.get('/admin/find-all')
        console.log('response:', res.data)

    } catch (error) {

        console.log('response:', error.message)
        
    }
    
}

getAllUsers();

async function testAuthRegister() {
  try {
    const payload = {
      id: "1",
      username: "adminTest",
      email: "admin@example.com",
      password: "123456",
      role: "ADMIN",
    };

    const res = await api.post('/auth/register', payload);

    console.log('Register berhasil', res.data);
  } catch (err) {
    if (err.response) {
      console.error('Error response', err.response.data);
    } else {
      console.error('Error message', err.message);
    }
  }
}

testAuthRegister();
