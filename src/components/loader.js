import React,{Component} from 'react'
export default class Loader extends Component {


    render(){
        return(
            <div style={{display:'flex',flexDirection:'row',flex:1,alignItems:'center',justifyContent:'center'}}>
                <p>Loading please wait .........</p>
            </div>
        )
    }
}
