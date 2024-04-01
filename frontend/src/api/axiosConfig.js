import axios from 'axios';

export default axios.create({
    baseURL:'https://dnd-ixfc.onrender.com',
    headers: {"ngrok-skip-browser-warning": "true"}
});
