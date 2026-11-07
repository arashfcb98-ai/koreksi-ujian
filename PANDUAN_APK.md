# Panduan Membuat APK dengan PWABuilder

Aplikasi: Koreksi Lembar Jawab (SMA Negeri 3 Paloh)

## Sebelum mulai
1. Unggah isi `koreksi-ljk-github.zip` versi terbaru ke GitHub/Vercel (termasuk folder `screenshots/` dan `icons/icon-maskable-512.png`), lalu commit.
2. Pastikan alamat aplikasi memakai HTTPS (GitHub Pages dan Vercel sudah otomatis), mis. `https://namaanda.github.io/koreksi-lembar-jawab/`.
3. Buka alamat itu di Chrome dan pastikan aplikasi tampil normal.

## Langkah di PWABuilder
1. Buka **https://www.pwabuilder.com** dari laptop (lebih mudah daripada HP).
2. Tempel alamat aplikasi di kolom, tekan **Start**.
3. Tunggu pemeriksaan. Tiga kategori yang dinilai: Manifest, Service Worker, Security. Semuanya harus hijau. Peringatan kuning "disarankan" boleh diabaikan.
4. Tekan **Package for stores**, lalu pilih **Android**.
5. Isi formulir:
   - **Package ID**: mis. `id.sch.sman3paloh.koreksi` (huruf kecil, titik sebagai pemisah, tidak bisa diubah setelah dibagikan).
   - **App name**: Koreksi Lembar Jawab
   - **Short name**: Lembar Jawab
   - **App version**: 1.0.0 (version code: 1)
   - **Display mode**: Standalone. **Orientation**: Portrait.
   - **Signing key**: pilih **New** (biarkan PWABuilder membuat kunci).
6. Tekan **Generate**, lalu unduh file zip hasilnya.

## Isi zip hasil
- `*.apk`: untuk dipasang langsung ke HP.
- `*.aab`: untuk Play Store (tidak dipakai jika hanya dibagikan langsung).
- `signing.keystore` dan `signing-key-info.txt`: **kunci penandatangan**.

> **Simpan kunci ini baik-baik** (cadangkan di Google Drive dan flashdisk). Tanpa kunci yang sama, pembaruan APK berikutnya tidak bisa dipasang di atas versi lama.

## Memasang di HP
1. Kirim file `.apk` ke HP (WhatsApp, Drive, kabel).
2. Buka file tersebut. Jika diminta, izinkan **Instal dari sumber tidak dikenal** untuk aplikasi yang dipakai membuka (mis. Files/Chrome).
3. Tekan **Instal**. Bila muncul peringatan Play Protect, pilih **Tetap instal**.
4. Buka aplikasi. Izinkan akses **kamera** saat diminta.

## Jika bilah alamat Chrome masih tampil di atas aplikasi
Itu tanda verifikasi domain (Digital Asset Links) belum cocok. Langkah:
1. Buka `signing-key-info.txt`, salin nilai **SHA-256 fingerprint**.
2. Buat file `.well-known/assetlinks.json` di repositori, isi dari PWABuilder (ia menyediakannya di zip: `assetlinks.json`).
3. Catatan: GitHub Pages dengan alamat berbentuk `namaanda.github.io/nama-repo/` sulit memenuhi ini karena file harus ada di akar domain. Solusi mudah: pakai Vercel (atau repositori bernama `namaanda.github.io`).
4. Tanpa langkah ini aplikasi tetap berjalan normal, hanya ada bilah kecil di atas.

## Memperbarui aplikasi
- Perubahan isi web (index.html dll.) **otomatis ikut** di APK, cukup unggah ke GitHub/Vercel. Tidak perlu membuat APK baru.
- APK baru hanya perlu kalau mengganti nama, ikon, atau Package ID.

## Masalah umum
| Masalah | Penanganan |
|---|---|
| PWABuilder menilai manifest bermasalah | Pastikan folder `icons/` dan `screenshots/` sudah terunggah dan alamatnya bisa dibuka |
| Kamera tidak terbuka | Izinkan kamera di Pengaturan HP > Aplikasi > Koreksi Lembar Jawab > Izin |
| "Aplikasi tidak terpasang" | Hapus versi lama dahulu, atau gunakan kunci yang sama |
| Bilah alamat muncul | Lihat bagian assetlinks di atas |
