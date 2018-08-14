import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {

        let { testSendProps } = this.props;     // ชื่อที่ import ต้องเป็นชื่อเดียวกันที่มีใน props (ควรใช้แบบนี้)
        let testSendProps3 = this.props.testSendProps;
        let testSendProps4 = testSendProps+" V4 Logic Here";

        return (
            <div>
                <h1>Header {this.props.testSendProps} V1</h1>
                <h1>Header {testSendProps} V2</h1>
                <h1>Header {testSendProps3} V3</h1>
                <h1>Header {testSendProps3} V3</h1>
                <h1>Header {testSendProps4}</h1>
            </div>
        )
    }
}

export default Header;