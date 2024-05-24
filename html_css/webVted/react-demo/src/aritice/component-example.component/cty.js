export function Cty() {
    return (
        <div class='timkiem' style={{ minHeight: '400px', minWidth: '300px', border: 'solid' }}>
            <div class='luongCoBan' style={{ marginLeft: '1000px', marginTop: '50px', fontSize: '20px' }} >Lương cơ bản 19000</div>
            <div class='menu' style={{ display: 'flex' }}>
                <div class='hoVaTen' style={{ fontSize: '25px', marginLeft: '100px' }} >Họ & Tên</div>
                <input type='text' id='name' placeholder="điền hộ" style={{ marginLeft: '200px' }} />
            </div>
            <div class='menu' style={{ display: 'flex', marginTop: '10px' }}>
                <div class='hoVaTen' style={{ fontSize: '25px', marginLeft: '100px' }} >MSNV</div>
                <input type='text' id='name' placeholder="điền hộ" style={{ marginLeft: '200px' }} />
            </div>
            <div class='menu' style={{ display: 'flex', marginTop: '10px' }}>
                <div class='hoVaTen' style={{ fontSize: '25px', marginLeft: '100px' }} >Phòng ban</div>
                <input type='text' id='name' placeholder="điền hộ" style={{ marginLeft: '200px' }} />
            </div>
            <div class='menu' style={{ display: 'flex', marginTop: '10px' }}>
                <div class='hoVaTen' style={{ fontSize: '25px', marginLeft: '100px' }} >Hệ số lương</div>
                <input type='text' id='name' placeholder="điền hộ" style={{ marginLeft: '200px' }} />
            </div>
            <div class='ddd' style={{ display: 'flex', marginLeft:'100px', marginTop:'50px',justifyContent:'center' }}>
                <input type='button' value='Nhập' style={{ width: '50px', height: '50px' }} />
                <input type='button' value='Tính lương' style={{ width: '100px', height: '50px', marginLeft:'50px'}} />
                <input type='button' value='Cập nhật' style={{ width: '100px', height: '50px', marginLeft:'50px' }} />
            </div>
            <div class='danhsach'style={{textAlign:'center'm}}>
                <span>STT</span>
                <span style={{marginLeft:'50px'}}>MSNV</span>
                <span style={{marginLeft:'50px'}}>HVT</span>
                <span style={{marginLeft:'50px'}}>pb</span>
                <span style={{marginLeft:'50px'}}>HSL</span>
                <span style={{marginLeft:'50px'}}>Lương</span>
            </div>
        </div>
    )
}