import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';
import ReactToPrint from "react-to-print";
import { FiPrinter } from "react-icons/fi";

class ModalViewHoaDon extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef(); // Create a ref for ModalBody
    }

    toggle = () => {
        this.props.toggleModalViewHoaDon();
    };

    createHoaDon = () => {
        this.props.createHoaDon();
    };

    render() {
        let HD = this.props.HD;
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.toggle} className="modal-shd-container" size='lg' centered>
                <ModalHeader toggle={this.toggle}>
                    IN HÓA ĐƠN
                </ModalHeader>
                <ModalBody>
                    <div className='container' ref={this.componentRef}>
                        <span className="store">Nhà sách ABC</span>
                        <div className='title'>HÓA ĐƠN</div>
                        <span className='ngay'>Ngày lập hóa đơn: {moment(HD.ngayLap).format("DD/MM/YYYY")}</span>
                        <div className='hd-table mt-4 mx-3'>
                            <div className="kh">
                                <span>Họ tên khách hàng: {HD.hoTen}</span>
                                <span>Số điện thoại: {HD.sdt}</span>
                            </div>
                            <table className="table table-striped mt-3">
                                <thead>
                                    <tr>
                                        <th className='stt'>STT</th>
                                        <th>Tên sách</th>
                                        <th>Thể loại</th>
                                        <th className='sl'>Số lượng</th>
                                        <th className='dgb'>Đơn giá bán</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {HD.CTHD && HD.CTHD.map((item, index) => (
                                        <tr key={index}>
                                            <td className='stt'>{index + 1}</td>
                                            <td>{item.sach}</td>                                            
                                            <td>{item.theLoai}</td>
                                            <td className='sl'>{item.soLuong}</td>
                                            <td className='dgb'>{item.donGiaBan}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan="4"></td>
                                        <td class='tonghd'>Tổng tiền: {HD.tongTien}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4"></td>
                                        <td class='tonghd'>Số tiền trả: {HD.soTienTra}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4"></td>
                                        <td class='tonghd'>Tiền trả lại: {HD.tienTraLai}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4"></td>
                                        <td class='tonghd'>Nợ: {HD.no}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='sign'>
                                <div>
                                    Nhân viên<br />
                                    <i>(Ký và họ tên)</i>
                                </div>
                                <div>
                                    Người mua hàng<br />
                                    <i>(Ký và họ tên)</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ReactToPrint
                        content={() => this.componentRef.current}
                        trigger={() => (
                            <Button type="submit" color="primary" className="print px-2" >
                                <FiPrinter/> In
                            </Button>
                        )}
                        onAfterPrint={this.toggle}
                    />
                    {' '}<Button color="secondary" className='exit px-2' onClick={this.toggle}>
                        Thoát
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}


const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalViewHoaDon);
