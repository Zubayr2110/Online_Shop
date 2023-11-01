
export default function getusers() {
    return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : false;
}
