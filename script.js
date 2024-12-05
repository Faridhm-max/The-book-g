function searchBooks() {
    // الحصول على قيمة البحث
    let searchQuery = document.getElementById('searchBox').value.toLowerCase();
    let books = document.querySelectorAll('.book');

    // التحقق من كل كتاب
    books.forEach(book => {
        let title = book.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}
document.querySelectorAll('.book a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // منع التحميل المباشر
        let bookTitle = link.closest('.book').querySelector('h3').textContent;
        alert(`تم بدء تحميل: ${bookTitle}`);
        window.location.href = link.href; // بدء التنزيل بعد الإشعار
    });
});