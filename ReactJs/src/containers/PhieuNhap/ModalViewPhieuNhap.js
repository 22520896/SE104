import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';
import ReactToPrint from "react-to-print";
import { FiPrinter } from "react-icons/fi";

class ModalViewPhieuNhap extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    componentDidMount() {}

    toggle = () => {
        this.props.toggleModalViewPhieuNhap();
    };

    render() {
        let PN = this.props.PN
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }}
                className="modal-pn-container" size='lg' centered>
                <ModalHeader toggle={() => { this.toggle() }}>
                    CHI TIẾT PHIẾU NHẬP
                </ModalHeader>
                <ModalBody>
                    <div ref={this.componentRef}>
                        <div className='container'>
                            <span className="store">Nhà sách ABC</span>
                            <div classname='tittle'>PHIẾU NHẬP SÁCH</div>
                            <span className='ngay'>Ngày lập phiếu: {moment(PN.ngayLap).format("DD/MM/YYYY")}</span>
                            <div className='pn-table mt-4 mx-3'>
                                <table class="table table-striped mt-3">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên sách</th>
                                            <th>Tác giả</th>
                                            <th>Thể loại</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá nhập</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PN.CTPN && PN.CTPN.map((item, index) => {
                                            return (
                                                <>
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.sach}</td>
                                                        <td>{item.tacGia}</td>
                                                        <td>{item.theLoai}</td>
                                                        <td>{item.soLuong}</td>
                                                        <td>{item.donGiaNhap}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div className='sign'>
                                    <div>
                                        Thủ kho<br />
                                        <i>(Ký và họ tên)</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ReactToPrint
                        content={() => this.componentRef.current}
                        trigger={() => (
                            <Button type="submit" color="primary" className="px-2" >
                                <FiPrinter /> In
                            </Button>
                        )}
                        onAfterPrint={this.toggle}
                    />
                    {' '}<Button color="secondary" className='px-2' onClick={this.toggle}>
                        Thoát
                    </Button>
                </ModalFooter>
            </Modal >
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalViewPhieuNhap);
