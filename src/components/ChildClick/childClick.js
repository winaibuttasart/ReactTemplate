import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

class ChildClick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }

        let intervalTime = 1500;    //1.5 วินาที
        setInterval(() => {
            this.setState({
                time: this.state.time + 1
            })
        }, intervalTime);

    }


    render() {
        let { time } = this.state;
        let { onChildClick } = this.props;
        return (
            <div>
                <div className="mt-3 ml-3">
                    <Button variant="contained" color="primary" onClick={() => { onChildClick(time) }}>
                        แสดงเวลาที่คลิ๊ก จากลูก
                    </Button>

                    <h4>Time from child is : {time}</h4>
                </div>
            </div>
        )
    }
}

export default ChildClick;