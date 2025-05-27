---
title: Cài đặt ban đầu
description: Hướng dẫn dành cho quản trị viên khởi tạo website Travel Web.
---

## Giới thiệu

Dự án **Travel Web** được xây dựng và phát triển bởi **Bees Group**. 
Mục tiêu của dự án là xây dựng một website du lịch có giao diện hiện đại, tối ưu cho SEO, tốc độ tải nhanh và dễ quản trị nội dung.

### Thông tin kỹ thuật

- **CMS**: WordPress 6.5.x  
- **PHP**: 8.1  
- **Node.js**: 22.0.0  
- **Theme**: Travel Theme (tùy chỉnh dựa trên Sage)  
- **Framework**: Sage 10  
- **Template Engine**: Blade (Laravel-style)  
- **CSS Framework**: Tailwind CSS ^4.0.9  
- **Trình biên dịch**: Vite ^6.2.0  
- **Quản lý gói**: Composer (PHP) và Yarn/NPM (Node.js)  
- **Plugin dịch**: `@shufo/prettier-plugin-blade`, WordPress CLI i18n 
- **Thư viện hoạt hình**: GSAP ^3.13.0  
- **Hiệu ứng chuyển trang**: swup ^4.8.2  
- **Xử lý ảnh**: sharp ^0.34.1  



Trang này bạn sẽ được hướng dẫn:

- Đăng nhập vào trang quản trị WordPress.
- Kích hoạt giao diện Travel Theme.
- Cấu hình cơ bản ban đầu như: logo, menu, trang chủ.

---

## 1. Đăng nhập quản trị

1. Mở trình duyệt và truy cập địa chỉ trang wordpress của bạn thêm sau phần địa chỉ để đăng nhập: **/wp-admin** 

> 🔑 **Tài khoản và mật khẩu quản trị viên** sẽ được cấp bởi đội kỹ thuật hoặc quản lý dự án.

2. Nhập tài khoản và đăng nhập.

   <img src="/images/docs/setup/login_page.png" alt="Giao diện đăng nhập" width="100%" />

> 👉 **Giao diện sẽ như hình ảnh** Vui lòng nhập thông tin tài khoản để đăng nhập vào hệ thống.

---

## 2. Kích hoạt giao diện Travel Theme

1. Sau khi đăng nhập, sẽ hiện thị **Quản trị** như sau:

   <img src="/images/docs/setup/dashboard.png" alt="Giao diện đăng nhập" width="100%" />

2. Vào menu **Quản trị > Giao diện (Appearance)**.

   <img src="/images/docs/setup/dashboard_appearance.png" alt="Giao diện " width="100%" />

3. Bạn sẽ thấy giao diện tên là **Giao diện** (Themes).

   <img src="/images/docs/setup/dashboard_themes.png" alt="Giao diện " width="100%" />

4. Ở kho giao diện này bạn sẽ thấy giao diện **Du lịch chuẩn (Travel)** và khi đưa con trỏ chuột vào sẽ hiện thị 2 nút như hình bên dưới.

   <img src="/images/docs/setup/themes_active.png" alt="Giao diện " width="100%" />

   - Kích hoạt (active)
   - Xem trước (live Privew)

👉 **Giao diện sẽ như hình ảnh** Vui lòng nhấn vào nút kích hoạt (active) để kích hoạt theme. Bạn đã có thể truy cập vào website.

5. Sau khi nhấn **Kích hoạt (Activate)** sẽ hiện thị một bảng lựa chọn như hình bên dưới.

   <img src="/images/docs/setup/themes_options.png" alt="cấu hình " width="100%" />

Giao diện lựa chọn gồm 2 lựa chọn:

- Lựa chọn 1: sẽ giúp chuyển toàn bộ dự án sang Tiếng Việt
- Lựa chọn 2: Là lựa chọn giúp tối ưu hóa SEO

👉 **Nếu nhấn đồng ý** Hệ thống sẽ tự nhập nội dung demo về bài viết, danh mục, bình luận, người dùng.

✅ Giao diện của website sẽ được áp dụng ngay lập tức.

---

## 3. Thiết lập logo & favicon

1. Vào **Giao diện > Tùy biến (Customize)**.
2. Chọn **Site Identity (Nhận diện trang)**.
3. Tải lên logo và favicon theo yêu cầu của dự án.
4. Nhấn **Lưu (Publish)** sau khi hoàn tất.

---

## 4. Cấu hình menu điều hướng

1. Vào **Giao diện > Menu (Appearance > Menus)**.
2. Tạo menu mới, ví dụ đặt tên là `Menu Chính`.
3. Thêm các trang bạn muốn hiển thị (Trang chủ, Giới thiệu, Liên hệ...).
4. Chọn vị trí hiển thị: `Primary Menu` hoặc `Main Navigation`.
5. Nhấn **Lưu Menu**.

---

## 5. Kiểm tra giao diện trang chính

Truy cập lại website bằng địa chỉ trang web của bạn

Bạn sẽ thấy giao diện mới đã được áp dụng, logo và menu đã hiển thị nếu cấu hình đúng.

---

## 📌 Tổng kết bước 1

Bạn đã:

- Kích hoạt theme giao diện Travel Web.
- Tùy biến logo, menu, trang chủ.
- Sẵn sàng để thêm nội dung.
