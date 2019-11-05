/**
 * Created by weiyun on 2019/11/5.
 */
import React from 'react';
import Input from './Input'
class  InputNumber extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            value: 'a'
        }
    }
    value = '1'
    render() {
        return (
            <div>
                <Input
                    rule={/\d/}
                    message="只允许输入数字"
                    defalutValue={this.value} onChange={(e) => {
                    this.value = e.target.value
                }}/>
            </div>
        );
    }
}





export default InputNumber;