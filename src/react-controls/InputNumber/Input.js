/**
 * Created by weiyun on 2019/11/5.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            focus:false,
            innerValue:''
        }
    }
    static propTypes = {
        value:PropTypes.string,
        onChange:PropTypes.func
    }
    static defaultProps = {
        onChange:()=>{}
    }
    get isControl(){
        return 'value' in this.props
    }
    get value(){
        if(this.isControl){
            return this.props.value
        }else{
            return this.state.innerValue
        }
    }
    render(){
        const{
            foucs
        }=this.state
        const {
            onChange,
            rule= new RegExp(),
            message,
            ...rest
        }=this.props
        return (
            <div>
                <div>
                    <input
                        value={this.value}
                        onFocus={e => {
                            this.setState({focus: true
                            })
                        }}
                        onBlur={e => {
                            this.setState({focus: false
                            })
                        }}
                        onChange={(e) => {
                            if(!this.isControl){
                                this.setState({
                                    innerValue: e.target.value
                                })
                            }
                            this.props.onChange(e)
                        }}
                    />
                </div>
                <p>
                    {!rule.test(this.value) && message}
                </p>
            </div>

        )
    }
    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }
}

export default Input


