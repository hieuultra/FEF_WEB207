$().ready(function () {
  // Hàm chuyển đổi định dạng ngày tháng
  function convertDateFormat(inputFormat) {
    var parts = inputFormat.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]); // Lưu ý: parts[1] - 1 vì tháng trong JavaScript bắt đầu từ 0.
  }
  //ngay sinh ko dc la ngay tuong lai
  $.validator.addMethod(
    "notFutureDate",
    function (value, element) {
      var selectedDate = convertDateFormat(value);
      var currentDate = new Date();

      // Loại bỏ phần giờ, phút, giây của currentDate và selectedDate để so sánh ngày đầy đủ.
      currentDate.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      return selectedDate < currentDate;
    },
    "Ngày sinh không được là ngày tương lai"
  );
  //ngay cap ko the la ngay tuong lai
  $.validator.addMethod(
    "notFutureWhere",
    function (value, element) {
      var selectedDate = convertDateFormat(value);
      var currentDate = new Date();

      // Loại bỏ phần giờ, phút, giây của currentDate và selectedDate để so sánh ngày đầy đủ.
      currentDate.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      return selectedDate < currentDate;
    },
    "Ngày cấp không được là ngày tương lai"
  );

  // Thêm phương thức kiểm tra số CMND/CCCD phải có đủ 12 số
  $.validator.addMethod(
    "cccdLength",
    function (value, element) {
      return this.optional(element) || /^0\d{11}$/.test(value);
    },
    "Số CMND/CCCD phải bắt đầu bằng số 0 và có đủ 12 số"
  );
  // Thêm phương thức kiểm tra định dạng số điện thoại
  $.validator.addMethod(
    "phoneVN",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(0[3897]|\+84[3897])([0-9])\d{7}$/.test(value)
      );
    },
    "Hãy nhập số điện thoại hợp lệ"
  );
  // Thêm phương thức kiểm tra select option
  $.validator.addMethod(
    "notDefaultOption",
    function (value, element) {
      return (
        value !== "Chọn tỉnh/thành phố" &&
        value !== "Quận/Huyện" &&
        value !== "Xã/Phường/Thị trấn"
      );
    },
    "Vui lòng chọn một lựa chọn khác ngoài mặc định"
  );
  //kiem tra chuyen nganh
  $.validator.addMethod(
    "notDefaultOptions",
    function (value, element) {
      return value !== "Chuyên ngành";
    },
    "Vui lòng chọn một lựa chọn khác ngoài mặc định"
  );
  //kiem tra option 2
  // Thêm phương thức kiểm tra select option
  $.validator.addMethod(
    "notDefaultOptionss",
    function (value, element) {
      return (
        value !== "Chọn tỉnh/thành phố" &&
        value !== "Quận/Huyện" &&
        value !== "Xã/Phường/Thị trấn"
      );
    },
    "Vui lòng chọn một lựa chọn khác ngoài mặc định"
  );
  $.validator.addMethod(
    "containsNoNumber",
    function (value, element) {
      return this.optional(element) || !/[0-9]/.test(value);
    },
    "Họ và tên không được chứa số"
  );
  $("#demoForm").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      hoten: {
        required: true,
        containsNoNumber: true,
      },
      ngaysinh: {
        required: true,
        notFutureDate: true,
      },
      dantoc: {
        required: true,
      },
      cccd: {
        required: true,
        cccdLength: true,
      },
      ngaycap: {
        required: true,
        notFutureWhere: true,
      },
      noicap: {
        required: true,
      },
      city: {
        required: true,
        notDefaultOption: true,
      },
      quan: {
        required: true,
        notDefaultOption: true,
      },
      xa: {
        required: true,
        notDefaultOption: true,
      },
      sonha: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      sdt: {
        required: true,
        phoneVN: true,
      },
      phuhuynh: {
        required: true,
      },
      sdtph: {
        required: true,
        phoneVN: true,
      },
      nv: {
        required: true,
        notDefaultOptions: true,
      },
      thpt: {
        required: true,
      },
      ntn: {
        required: true,
        notDefaultOptionss: true,
      },
      qh: {
        required: true,
        notDefaultOptionss: true,
      },
      x: {
        required: true,
        notDefaultOptionss: true,
      },
      nguoinhan: {
        required: function (element) {
          return (
            !$("[name='thanhvien1']").prop("checked") &&
            !$("[name='thanhvien2']").prop("checked")
          );
        },
      },
      dctt: {
        required: function (element) {
          return (
            !$("[name='dc1']").prop("checked") &&
            !$("[name='dc2']").prop("checked")
          );
        },
      },
      anhcccd: {
        required: true,
      },
      anhcccdsau: {
        required: true,
      },
      camdoan: {
        required: true,
      },
      camket: {
        required: true,
      },
    },
    messages: {
      hoten: {
        required: "Hãy nhập họ và tên",
        containsNoNumber: "Họ và tên không được chứa số",
      },
      ngaysinh: {
        required: "Hãy nhập ngày sinh",
      },
      dantoc: {
        required: "Hãy nhập dân tộc",
      },
      cccd: {
        required: "Hãy nhập số CMND/CCCD",
      },
      ngaycap: {
        required: "Hãy nhập ngày cấp CMND/CCCD",
      },
      noicap: {
        required: "Hãy nhập nơi cấp CMND/CCCD",
      },
      city: {
        required: "Hãy nhập tỉnh/thành phố",
        notDefaultOption: "Vui lòng chọn tỉnh/thành phố",
      },
      quan: {
        required: "Hãy nhập quận/huyện",
        notDefaultOption: "Vui lòng chọn quận/huyện",
      },
      xa: {
        required: "Hãy nhập xã/phường/thị trấn",
        notDefaultOption: "Vui lòng chọn xã/phường/thị trấn",
      },
      sonha: {
        required: "Hãy nhập địa chỉ",
      },
      email: {
        required: "Bắt buộc nhập email",
        email: "Hãy nhập dúng định dạng email",
      },
      sdt: {
        required: "Hãy nhập số điện thoại thí sinh",
      },
      phuhuynh: {
        required: "Hãy nhập họ và tên phụ huynh/người bảo trợ",
      },
      sdtph: {
        required: "Hãy nhập số điện thoại phụ huynh/người bảo trợ",
      },
      nv: {
        required: "Vui lòng chọn chuyên ngành",
        notDefaultOptions: "Hãy chọn chuyên ngành thứ nhất",
      },
      thpt: {
        required: "Hãy nhập trường tốt nghiệp THPT hoặc tương đương",
      },
      ntn: {
        required: "Hãy nhập tỉnh/thành phố",
        notDefaultOptionss: "Vui lòng chọn tỉnh/thành phố",
      },
      qh: {
        required: "Hãy nhập quận/huyện",
        notDefaultOptionss: "Vui lòng chọn quận/huyện",
      },
      x: {
        required: "Hãy nhập xã/phường/thị trấn",
        notDefaultOptionss: "Vui lòng chọn xã/phường/thị trấn",
      },
      nguoinhan: {
        required: "Hãy chọn người nhận giấy báo kết quả xét tuyển",
      },
      dctt: {
        required: "Hãy chọn địa chỉ nhận giấy báo kết quả xét tuyển",
      },
      anhcccd: {
        required: "Hãy chọn ảnh CMND/CCCD mặt trước",
      },
      anhcccdsau: {
        required: "Hãy chọn ảnh CMND/CCCD mặt sau",
      },
      camdoan: {
        required: "Bạn chưa đồng ý với cam kết xác nhận thông tin",
      },
      camket: {
        required: "Bạn chưa đồng ý với cam kết tài chính",
      },
    },
    submitHandler: function (form) {
      // Nếu form hợp lệ, hiển thị thông báo thành công
      alert("Đăng ký thành công!");
      return false; // Ngăn form tự động submit
    },
  });
  // Thêm sự kiện keyup hoặc input cho các trường input cần kiểm tra
  $("input[name='hoten']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='ngaysinh']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='sonha']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });

  $("input[name='ngaycap']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='dantoc']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='cccd']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='noicap']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });

  $("input[name='sdt']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='email']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='phuhuynh']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='sdtph']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='thpt']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='anhcccd']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='anhcccdsau']").on("keyup input", function () {
    $("#demoForm").validate().element($(this));
  });
  // Thêm sự kiện change cho các trường select cần kiểm tra
  $("select[name='city']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });

  $("select[name='quan']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });

  $("select[name='xa']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });

  $("select[name='nv']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });
  $("select[name='ntn']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });
  $("select[name='qh']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });
  $("select[name='x']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });
  // Thêm sự kiện change cho các trường checkbox cần kiểm tra
  $("input[name='nguoinhan'],  [name='dctt']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });
  $("input[name='camket'],  [name='camdoan']").on("change", function () {
    $("#demoForm").validate().element($(this));
  });
});
