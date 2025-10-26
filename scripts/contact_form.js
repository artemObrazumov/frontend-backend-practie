function submitForm() {
    var form = document.getElementById("feedbackForm");
    const formData = new FormData(form);
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        category: formData.get('category'),
        message: formData.get('message')
    };
    contactModal.close();
    form.reset();

    alert("Данные приняты, мы свяжемся с вами!");
}

document.getElementById('feedbackForm').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && event.target.type !== 'textarea'){
        event.preventDefault();
    }
});