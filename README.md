# Simple Library with NestJS

## Deskripsi

Aplikasi ini merupakan REST API perpustakaan sederhana yang dibangun dengan NestJS dan TypeScript dengan pattern Domain-Driven Design (DDD). API ini menyediakan dua operasi CRUD utama yang saling berkaitan, menggunakan database SQL (MySQL), serta dilengkapi dengan autentikasi menggunakan JWT. Fitur pengujian end-to-end (e2e) juga disediakan untuk menguji token API.

## Fitur

- CRUD untuk **Authors** dan **Books**
- Autentikasi menggunakan JWT
- Pengujian e2e untuk token API

## Teknologi yang Digunakan

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/)

## API Endpoints

### Authentications

- POST `/auth/signup`

  - Request Body:

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- POST `/auth/login`

  - Request Body:

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- GET `/auth/profile` - Mendapatkan informasi profil pengguna (memerlukan autentikasi)

  ```
  Authorization: Bearer <your_jwt_token>
  ```

### Users

- GET `/users` - Mengambil semua pengguna
- GET `/users/:id` - Mengambil pengguna berdasarkan ID
- DELETE `/users/:id` - Menghapus pengguna berdasarkan ID

### Authors

- GET `/books` - Mengambil semua buku
- GET `/books/:id` - Mengambil buku berdasarkan ID
- POST `/books` - Menambahkan buku baru
- PUT `/books/:id` - Memperbarui buku berdasarkan ID
- DELETE `/books/:id` - Menghapus buku berdasarkan ID

### Books

- GET `/authors` - Mengambil semua penulis
- POST `/authors` - Menambahkan penulis baru
- GET `/authors/:id` - Mengambil penulis berdasarkan ID
- PUT `/authors/:id` - Memperbarui penulis berdasarkan ID
- DELETE `/authors/:id` - Menghapus penulis berdasarkan ID

## Pengujian

Untuk menjalankan pengujian e2e, menjalankan perintah berikut:

Npm

```bash
npm run test:e2e
```

Yarn

```bash
yarn test:e2e
```

Pnpm

```bash
pnpm test:e2e
```

## Alasan Pemilihan Pattern Domain-Driven Design (DDD)

Saya memilih menggunakan pattern Domain-Driven Design (DDD) karena DDD memiliki pattern dengan tingkat modularitas tinggi, sahingga redundansi kode berkurang, saya dapat fokus pada satu domain tertentu dalam mengembangkan suatu fitur, dll

1. Fokus pada Domain: DDD memfokuskan pengembangan pada domain bisnis yang spesifik. Dengan memahami dan mengelompokkan fitur berdasarkan kebutuhan domain.
2. Skalabilitas dan Perawatan: Dengan struktur modular yang jelas dan model domain yang terdefinisi, aplikasi yang dibangun menggunakan DDD lebih mudah untuk diskalakan dan dirawat.
