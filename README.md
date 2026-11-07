# Koreksi Lembar Jawab

Aplikasi koreksi lembar jawab pilihan ganda otomatis dari foto (HP).
Dibuat oleh **Aras Hidayat, S.Pd**, SMA Negeri 3 Paloh.

- Lembar jawab 50 soal, tiga lembar per kertas A4 atau F4. Bisa dipakai untuk ujian 40 atau 50 soal.
- Menu: **Pengaturan** (jenis ujian dan kunci jawaban) → **Pindai** → **Hasil** (simpan, unduh Excel, cadangan) → **Riwayat** (semua ujian dan aktivitas).
- Foto diproses di HP dan tidak dikirim ke server. Data tersimpan di browser tiap HP.

## Isi paket

```
index.html               aplikasi (satu file)
sw.js                    agar aplikasi bisa dibuka tanpa internet
manifest.webmanifest     agar bisa dipasang di layar utama HP
icons/                   logo sekolah dan ikon aplikasi
lembar/                  lembar jawab PDF (A4 dan F4)
```

## Tutorial memasang di GitHub Pages (dari komputer)

1. **Buat akun GitHub** di github.com (gratis), lalu masuk.
2. Klik tanda **+** di kanan atas, pilih **New repository**.
   - Repository name: `koreksi-ljk` (huruf kecil, tanpa spasi).
   - Pilih **Public**.
   - Centang **Add a README file**. Klik **Create repository**.
3. **Ekstrak** file zip `koreksi-ljk-github.zip` di komputer. Hasilnya satu folder berisi file dan folder di atas.
4. Di halaman repositori, klik **Add file → Upload files**.
5. **Seret semua isi folder hasil ekstrak** ke kotak unggah (`index.html`, `sw.js`, `manifest.webmanifest`, folder `icons` dan folder `lembar`, sekaligus). Susunan folder harus tetap sama.
   - Jika diminta menimpa README, pilih saja versi yang diunggah.
6. Tunggu semua file selesai terunggah, lalu klik tombol hijau **Commit changes**.
7. Buka **Settings → Pages** (menu di sisi kiri).
   - Pada **Build and deployment**, di **Source** pilih **Deploy from a branch**.
   - Pada **Branch** pilih **main** dan folder **/ (root)**, lalu klik **Save**.
8. Tunggu 1 sampai 3 menit. Muat ulang halaman Pages sampai muncul tulisan
   **Your site is live at** `https://NAMA-AKUN.github.io/koreksi-ljk/`
9. Buka alamat itu di HP.

## Memasang di layar utama HP

- **Android (Chrome):** menu titik tiga → **Tambahkan ke layar utama** (atau **Instal aplikasi**).
- **iPhone (Safari):** tombol **Bagikan** → **Tambahkan ke Layar Utama**.

Buka aplikasi sekali saat ada internet. Setelah itu aplikasi bisa dibuka tanpa internet.

## Kamera dengan panduan

Di menu **Pindai**, ketuk **Buka kamera dengan panduan**. Izinkan akses kamera saat browser bertanya.
Garis hijau muncul di sekeliling lembar yang terbaca. Jika sudah pas dan HP tidak bergerak, foto diambil otomatis.
Pesan di bagian atas layar memberi petunjuk (terlalu gelap, dekatkan, ada sudut terpotong).
Tombol **Otomatis** bisa dimatikan untuk memotret manual dengan tombol putih.
Kamera dengan panduan hanya berjalan di alamat `https://` (misalnya GitHub Pages). Jika tidak tersedia, pakai **Kamera bawaan HP** atau **Pilih dari galeri**.

## Riwayat

Menu **Riwayat** menampilkan semua ujian yang pernah dibuat (mata pelajaran, kelas, jumlah siswa, rata-rata) dan daftar lembar yang terakhir dikoreksi.
Dari sini Bapak bisa membuka hasil ujian lama, memindai lagi, menyalin ujian (kunci jawaban ikut tersalin, hasil kosong) untuk kelas lain, atau menghapus ujian.

## Memperbarui aplikasi

Buka repositori, klik `index.html`, lalu klik ikon pensil, atau gunakan **Add file → Upload files** untuk mengunggah `index.html` baru, kemudian **Commit changes**.
Jika tampilan lama masih muncul di HP, tutup aplikasi sepenuhnya lalu buka lagi, atau muat ulang dua kali.

## Masalah yang sering muncul

- **Halaman 404:** pastikan `index.html` berada di folder paling luar repositori (bukan di dalam folder lain), dan Pages memakai branch **main** folder **/ (root)**.
- **Logo atau tombol unduh lembar tidak muncul:** folder `icons` dan `lembar` belum terunggah dengan nama yang sama.
- **Kamera tidak mau terbuka:** cek izin kamera untuk situs itu di pengaturan browser, lalu coba lagi.
- **Data hilang di HP:** data tersimpan di browser. Gunakan **Simpan cadangan data** di menu Hasil secara berkala.
- **Alamat berubah:** data tersimpan per alamat. Jika nama repositori diganti, pulihkan dari file cadangan.

## Mencetak lembar jawab

File ada di folder `lembar/` (A4 dan F4). Cetak dengan skala **100%** (jangan "fit to page").
Sisakan tepi putih saat menggunting tiga lembar; kotak hitam di sudut tidak boleh terpotong.
Aplikasi hanya membaca lembar yang memiliki empat kotak hitam di sudut.


## Sampul

Saat aplikasi pertama kali dibuka pada hari itu di sebuah HP atau browser, muncul halaman sampul berisi deskripsi singkat dan nama pembuat. Ketuk **Mulai Mengoreksi** untuk masuk ke menu Pengaturan. Setelah itu sampul tidak muncul lagi sampai keesokan harinya (sekali per hari). Untuk melihatnya lagi, ketuk logo sekolah di bagian atas aplikasi (tombol Esc di laptop menutupnya).
