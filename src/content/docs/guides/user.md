---
title: Quản lý người dùng
description: Hướng dẫn dành cho quản trị viên khởi tạo và quản lý người dùng.
---

## Giới thiệu

Trang này hướng dẫn bạn cách:

- Thêm người dùng mới.
- Chỉnh sửa thông tin người dùng.
- Gán quyền (vai trò) phù hợp cho từng người.
- Xóa người dùng không còn sử dụng.

---

## 1. Truy cập trang quản lý người dùng

1. Vào **Trang quản trị (Dashboard)**.

<figure>
  <img src="/images/docs/setup/dashboard.png" alt="Giao diện đăng nhập" width="100%" />
</figure>

2. Trong menu bên trái, chọn **Thành viên (Users) > Tất cả người dùng (All Users)**.

   <img src="/images/docs/setup/dashboard_users.png" alt="" width="100%" />

> 👉 Tại đây, bạn sẽ thấy danh sách tất cả tài khoản người dùng hiện có trong hệ thống.

---

## 2. Thêm người dùng mới

1. Chọn **Thành viên > Thêm mới**.

   <img src="/images/docs/setup/add_user.png" alt="Thêm người dùng" width="100%" />

2. Sau khi nhấn nút thêm mới sẽ hiện thị form tạo như hình ở dưới:

   <img src="/images/docs/setup/form_user.png" alt="Thêm người dùng" width="100%" />

   - **Tên người dùng** (bắt buộc): Ví dụ `nguyenvana`
   - **Email** (bắt buộc): Đảm bảo đúng định dạng
   - **Tên**: (tùy chọn)
   - **Họ**: (tùy chọn)
   - **Mật khẩu**: Bạn có thể để WordPress tự tạo hoặc đặt thủ công
   - **Gửi email cho người dùng mới**: (tùy chọn) Nên bật
   - **Vai trò (Role)**: chọn quyền phù hợp (xem bên dưới)

> 👉 Tại đây, cần nhập đầy đủ thông tin của người dùng mới để có thể tạo người dùng.

3. Nhấn **Thêm người dùng mới**.

> ✅ Người dùng sẽ nhận được email để thiết lập mật khẩu (nếu bạn bật tùy chọn gửi email).

---

## 3. Các quyền (vai trò) phổ biến

| Quyền                             | Mô tả                                           |
| --------------------------------- | ----------------------------------------------- |
| **Quản trị viên (Administrator)** | Toàn quyền quản lý website.                     |
| **Biên tập viên (Editor)**        | Quản lý bài viết của toàn bộ người dùng.        |
| **Tác giả (Author)**              | Tạo, chỉnh sửa và đăng bài viết của chính mình. |
| **Cộng tác viên (Contributor)**   | Viết bài nhưng không thể đăng, cần được duyệt.  |
| **Thành viên (Subscriber)**       | Chỉ có thể đọc và cập nhật hồ sơ cá nhân.       |

> ⚠️ **Không nên cấp quyền "Quản trị viên" cho người không thực sự cần toàn quyền.**

---
 
## 4. Chỉnh sửa người dùng và gán quyền

1. Trong danh sách người dùng, di chuột vào tên người cần sửa và chọn **Chỉnh sửa (Edit)**.

   <img src="/images/docs/setup/edit_user.png" alt="Chỉnh sửa người dùng" width="100%" />

2. Sau khi nhấn vào nút chỉnh sửa (Edit) sẽ xuất hiện mẫu như hình ở dưới bạn có thể thay đổi:

   <img src="/images/docs/setup/form_edit_user.png" alt="Mẫu chỉnh sửa người dùng" width="100%" />

   - Màu sắc chủ đề
   - Họ tên
   - Biệt danh hiển thị
   - Email
   - Vai trò (quyền)
   - Mật khẩu mới (nếu cần)
   - ...

   <img src="/images/docs/setup/options_roles_user.png" alt="Thay đổi quyền người dùng" width="100%" />

> 👉 Tại đây, Có thể thay đổi quyền của người dùng thành những các quyền khác<a href="#3-các-quyền-vai-trò-phổ-biến">(xem quyền ở mục 3)</a>.

3. Sau khi thay đổi những thông tin. Nhấn **Cập nhật người dùng (Update user)** như hình bên dưới để lưu thay đổi.

   <img src="/images/docs/setup/button_edit_user.png" alt="Nút lưu chỉnh sửa người dùng" width="100%" />

---

## 5. Xóa người dùng

1. Trong danh sách người dùng, di chuột vào tên cần xóa, chọn **Xóa (Delete)**.

   <img src="/images/docs/setup/delete_user.png" alt="Xóa người dùng" width="100%" />

2. Sau khi nhấn vào xóa WordPress sẽ hỏi bạn có muốn xóa người dùng như ảnh bên dưới:

   <img src="/images/docs/setup/button_delete_user.png" alt="Xác nhận xóa người dùng" width="100%" />

3. Chọn phương án phù hợp rồi nhấn **Xác nhận xóa**.

> ❗ Xóa người dùng sẽ không thể khôi phục, hãy kiểm tra kỹ trước khi thực hiện.

---

## 📌 Kết thúc

Bạn đã nắm được:

- Cách thêm, chỉnh sửa, xóa người dùng.
- Cách gán quyền phù hợp cho từng vai trò.
