<script>
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault(); // Mencegah form refresh halaman
        const nik = document.getElementById("nik").value;
        const nama = document.getElementById("nama").value;
        const jenis_kelamin = document.getElementById("jenis_kelamin").value;
        const ttl = document.getElementById("ttl").value;
        const alamat = document.getElementById("alamat").value;
        const status = document.getElementById("status").value;
        const pekerjaan = document.getElementById("pekerjaan").value;

        // Simpan ke local storage
        localStorage.setItem("nik", nik);
        localStorage.setItem("nama", nama);
        localStorage.setItem("jenis_kelamin", jenis_kelamin);
        localStorage.setItem("ttl", ttl);
        localStorage.setItem("alamat", alamat);
        localStorage.setItem("status", status);
        localStorage.setItem("pekerjaan", pekerjaan);

        alert("Data berhasil disimpan di Local Storage!");
    });
</script>
