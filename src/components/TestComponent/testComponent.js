import React, { Component } from 'react';
import './style.css';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import ChildClick from '../ChildClick/childClick'

class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }

        this.getDataFromChild = this.getDataFromChild.bind(this);
    }

    getDataFromChild(data) {
        this.setState({
            data: data
        });
    }


    render() {

        let { data } = this.state;

        return (
            <div>
                <Header testSendProps="String From Parent" />
                {/* ** Note  ข้อมูลที่ส่งจะใส่ "" เฉพาะสตริง นอกนั้นจะส่งต้องอยู่ภายใต้ปีกกา เช่น {true}, {123}, {{ name: "Winai", nickname: "Nize" }}, [กรณีเป็น boolean ส่งไปแค่ชื่อก็ได้ ซึ่งค่าที่ส่งไปจะเป็นทรู] */}
                <h1>Test Component</h1>
                <Footer name={{ name: "winai" }} />

                <ChildClick onChildClick={this.getDataFromChild} />
                <h1 className="mt-3 ml-3">{data}</h1>
            </div>
        )
    }
}

export default TestComponent;