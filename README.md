# Koreksi Lembar Jawab

Aplikasi web untuk mengoreksi lembar jawab pilihan ganda (50 soal) otomatis dari foto HP. Semua proses berjalan di peramban; foto tidak dikirim ke server.

Oleh **Aras Hidayat, S.Pd**, SMA Negeri 3 Paloh, Kabupaten Sambas.

## Alur
1. **Pengaturan**: pilih jenis ujian, isi mata pelajaran, kelas, tanggal, jumlah soal, dan kunci jawaban (tempel huruf, pindai lembar kunci, atau ketuk manual).
2. **Pindai**: foto lembar jawab (kamera atau galeri), periksa, lalu Simpan.
3. **Hasil**: rata-rata, peringkat, soal tersulit, detail per siswa. Salin untuk Excel, unduh CSV, atau Simpan ke Riwayat.
4. **Riwayat**: daftar ujian tersimpan. Bisa dilanjutkan, dipakai ulang kuncinya, diekspor, atau dihapus. Tersedia cadangan dan pemulihan (JSON).

Data tersimpan di peramban perangkat (localStorage). Gunakan Cadangan data di menu Riwayat untuk memindahkan antar perangkat.

## Memasang di GitHub Pages
1. Buat repositori baru di GitHub, lalu unggah seluruh isi folder ini (termasuk `assets/` dan `lembar/`).
2. Buka **Settings > Pages**, pada *Build and deployment* pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
3. Tunggu satu sampai dua menit. Alamatnya: `https://NAMA-AKUN.github.io/NAMA-REPO/`.
4. Di HP, buka alamat itu lalu pilih *Tambahkan ke layar utama* agar tampil seperti aplikasi.

## Struktur
- `index.html`: seluruh aplikasi (tanpa proses build)
- `assets/`: logo dan ikon
- `lembar/`: PDF lembar jawab A4 dan F4
- `manifest.webmanifest`: pengaturan layar utama
