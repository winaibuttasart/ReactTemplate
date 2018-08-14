import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

class Footer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            currentNumberClick : 0
        }

        let intervalTime = 1000;    //1 วินาที
        setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, intervalTime);

        //bind function
        this.onClickButtonShowProps2 = this.onClickButtonShowProps2.bind(this); //การ  bind() คือบอก function ที่ bind ว่า this ของแกคือ this ของ class นะ [กรณี bind ใน constructor]

    }


    onClickButton() {
        alert("แยกฟังก์ชัน");
    }

    onClickButtonShowProps() {
        alert(this.props.name.name);
    }

    onClickButtonShowProps2() {
        alert(this.props.name.name);
    }

    getCurrentNumberClick(time) {
        this.setState({
            currentNumberClick: time
        })
    }

    render() {

        let { time, currentNumberClick } = this.state;

        return (
            <div>
                <h1>Footer online time {time}</h1>

                <div className="mt-3 ml-3">
                    <Button variant="contained" color="primary" onClick={() => { alert("เขียนในบรรทัดเดียว") }}>
                        คลิ๊กเพื่อแสดง Popup [เขียนในบรรทัดเดียว]
                    </Button>
                </div>
                {/* <Button variant="contained" color="primary" onClick={this.onClickButton()}>
                    คลิ๊กเพื่อแสดง Popup [แยกฟังก์ชันเรียกเลยทันที]
                </Button> */}
                <div className="mt-3 ml-3">
                    <Button variant="contained" color="primary" onClick={this.onClickButton}>
                        คลิ๊กเพื่อแสดง Popup [แยกฟังก์ชันเรียกตอนคลิ๊ก]
                    </Button>
                </div>

                <div className="mt-3 ml-3">
                    <Button variant="contained" color="primary" onClick={() => { this.onClickButtonShowProps() }}>
                        คลิ๊กเพื่อแสดง Props ที่ส่งมาจากพ่อแม่ Solution1
                    </Button>
                </div>

                <div className="mt-3 ml-3">
                    <Button variant="contained" color="primary" onClick={this.onClickButtonShowProps2}>
                        คลิ๊กเพื่อแสดง Props ที่ส่งมาจากพ่อแม่ Solution2
                    </Button>
                </div>

                <div className="mt-3 ml-3">
                    <Button variant="contained" color="primary" onClick={()=>this.getCurrentNumberClick(time)}>
                        แสดงเวลาที่คลิ๊ก
                    </Button>

                    <h3>{currentNumberClick}</h3>

                </div>
            </div>
        )
    }
}

export default Footer;