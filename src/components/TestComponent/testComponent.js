import React, { Component } from 'react';
import './style.css';

import Header from '../Header/header';
import Footer from '../Footer/footer'

class TestComponent extends Component {
    render() {
        return (
            <div>
                <Header testSendProps="String From Parent" />
                {/* ** Note  ข้อมูลที่ส่งจะใส่ "" เฉพาะสตริง นอกนั้นจะส่งต้องอยู่ภายใต้ปีกกา เช่น {true}, {123}, {{ name: "Winai", nickname: "Nize" }}, [กรณีเป็น boolean ส่งไปแค่ชื่อก็ได้ ซึ่งค่าที่ส่งไปจะเป็นทรู] */}
                <h1>Test Component</h1>
                <Footer name={{ name: "winai" }} />
            </div>
        )
    }
}

export default TestComponent;