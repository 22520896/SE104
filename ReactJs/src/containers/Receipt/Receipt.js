import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Receipt.scss'
class Receipt extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="text-center">
                Receipt
            </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
