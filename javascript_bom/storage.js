// storage - các vùng nhớ lưu trên trình duyệt
// mục đích: tracking, lưu data người dùng
// ứng dụng: login, lịch sử hoạt động, giỏ hàng...
// localStorage


// set date
const user = {
    name: 'Viet Toan',
    age: 27
}
localStorage.setItem('use', JSON.stringify(user))
localStorage.setItem('user', 1);
// // xoa
// localStorage.removeItem('user');
// clear
// localStorage.clear();

// truy xuat
console.log(localStorage.getItem('user'));

// cookie
// dung luog 4kb
// co thoi thoi gian het han
document.cookie='usename=John Doe; expires=Thu, 28 Dec 2024 12:00:00 UTC; path=/'