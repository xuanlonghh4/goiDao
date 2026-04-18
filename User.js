class User {
    constructor(data = {}) {
        this.name = data.name || '';
        this.phone = data.phone || '';
        this.dao = data.dao || '';
        this.dao_img = data.dao_img|| '';
        this.gio = data.gio || '';
        this.service = data.service || 0;
        this.errors = {};
    }

    getPrice(){
        if(this.dao == "1"){
            return 1000000;
        }
        if(this.dao == "2"){
            return 500000;
        }
        if(this.dao == "3"){
            return 300000;
        }
    }

    getDaoImgUrl(){
        if(this.dao == "1"){
            return `https://anhtomau.com/wp-content/uploads/2026/01/Anh-gai-xinh-mong-to-phong-cach-sexy.webp`;
        }
        if(this.dao == "2"){
            return `https://maunaildep.com/wp-content/uploads/2025/05/anh-gai-xinh-mong-to-4.jpg`;
        }
        if(this.dao == "3"){
            return `https://anhnail.com/wp-content/uploads/2024/10/Hinh-gai-xinh-mong-to-sexy.jpg`;
        }
    }

    getTotalPrice(){
        return this.gio*(this.getPrice() + this.service*(this.getPrice()*150/100));
    }

    validate() {
        this.errors = {};
        const phoneRegex = /^(03|05|07|08|09|02[0-9])[0-9]{8}$/;
        // Regex: Chỉ chữ cái và khoảng trắng, không cho phép số
        const nameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;

        if (!this.name.trim()) {
            this.errors.name = 'Tên không được để trống';
        } else if (!nameRegex.test(this.name)) {
            this.errors.name = 'Tên không được chứa số hoặc ký tự đặc biệt';
        }

        if(!this.phone.trim()){
            this.errors.phone = 'Số điện thoại không được bỏ trống';
        }
        else if (!phoneRegex.test(this.phone)) {
            this.errors.phone = 'Số điện thoại VN không hợp lệ';
        }


        return Object.keys(this.errors).length === 0;
    }
}

