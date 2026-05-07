const form = document.getElementById('formRegistrasi');
const pesan = document.getElementById('pesan');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    pesan.innerHTML = 'Registrasi berhasil dilakukan!';

    form.reset();
});