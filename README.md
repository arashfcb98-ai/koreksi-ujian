# Koreksi LJK

Aplikasi koreksi lembar jawab pilihan ganda otomatis dari foto (HP).
Dibuat oleh **Aras Hidayat, S.Pd**, SMA Negeri 3 Paloh.

- Lembar jawab 50 soal, tiga lembar per kertas A4 atau F4. Bisa dipakai untuk ujian 40 atau 50 soal.
- Alur: **1 Setelan** (jenis ujian dan kunci jawaban) → **2 Pindai** → **3 Hasil** (simpan, unduh Excel, cadangan).
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
   - Centang **Add a README file** agar repositori langsung terisi. Klik **Create repository**.
3. **Ekstrak** file zip `koreksi-ljk-github.zip` di komputer. Hasilnya satu folder berisi file dan folder di atas.
4. Di halaman repositori, klik **Add file → Upload files**.
5. **Seret semua isi folder hasil ekstrak** ke kotak unggah (pilih `index.html`, `sw.js`, `manifest.webmanifest`, folder `icons` dan folder `lembar`, lalu seret sekaligus). Susunan folder harus tetap sama.
   - Jika diminta menimpa README, pilih saja versi yang diunggah.
6. Tunggu semua file selesai terunggah, lalu klik tombol hijau **Commit changes**.
7. Buka **Settings → Pages** (menu di sisi kiri).
   - Di bagian **Build and deployment**, pada **Source** pilih **Deploy from a branch**.
   - Pada **Branch** pilih **main** dan folder **/ (root)**, lalu klik **Save**.
8. Tunggu 1 sampai 3 menit. Muat ulang halaman Pages tersebut sampai muncul tulisan
   **Your site is live at** `https://NAMA-AKUN.github.io/koreksi-ljk/`
9. Buka alamat itu di HP.

## Memasang di layar utama HP

- **Android (Chrome):** menu titik tiga → **Tambahkan ke layar utama** (atau **Instal aplikasi**).
- **iPhone (Safari):** tombol **Bagikan** → **Tambahkan ke Layar Utama**.

Buka aplikasi sekali saat ada internet. Setelah itu aplikasi bisa dibuka tanpa internet.

## Cara memasang dari HP saja

1. Buka github.com di Chrome HP, ketuk menu titik tiga, aktifkan **Situs desktop**.
2. Ikuti langkah 1 sampai 7 di atas. Pada langkah mengunggah, ketuk **choose your files** dan pilih file satu per satu.
   Untuk folder `icons` dan `lembar`, buat dengan mengetik nama folder diikuti `/` pada kolom nama file
   (misalnya `icons/icon-192.png`) saat menambahkan file lewat **Add file → Create new file / Upload files**.
   Cara ini lebih merepotkan, jadi komputer lebih disarankan.

## Memperbarui aplikasi

Buka repositori, klik `index.html`, klik ikon pensil (atau **Add file → Upload files** dan unggah `index.html` baru), lalu **Commit changes**.
Jika tampilan lama masih muncul di HP, tutup aplikasi sepenuhnya lalu buka lagi, atau muat ulang dua kali.

## Masalah yang sering muncul

- **Halaman 404:** pastikan `index.html` berada di folder paling luar repositori (bukan di dalam folder lain), dan Pages memakai branch **main** folder **/ (root)**.
- **Logo atau tombol unduh lembar tidak muncul:** folder `icons` dan `lembar` belum terunggah dengan nama yang sama.
- **Data hilang di HP:** data tersimpan di browser. Gunakan **Simpan cadangan data** di langkah 3 secara berkala.
- **Alamat berubah:** data tersimpan per alamat. Jika nama repositori diganti, pulihkan dari file cadangan.

## Mencetak lembar jawab

File ada di folder `lembar/` (A4 dan F4). Cetak dengan skala **100%** (jangan "fit to page").
Aplikasi hanya membaca lembar yang memiliki empat kotak hitam di sudut.
