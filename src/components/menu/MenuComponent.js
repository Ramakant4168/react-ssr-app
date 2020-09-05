
import React,{Component} from 'react'
import Styles from './styles.css'



export default class MenuComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
          dataApi : [],
          error : false
        }
      }

        getYearbuttonStyle=(value)=>   {
                
                let year = this.props.selectedYear
                return {margin:5, backgroundColor: (value == year ? '#639453' : '#d9fad9'), borderColor: 'honeydew'}
        } 
        getLaunchbuttonStyle=(value)=>   {

           
            let launch = this.props.selectedLaunch
            return {margin:5, backgroundColor:(value === launch ? '#639453' : '#d9fad9' ), borderColor: 'honeydew'}
        } 
        getLandbuttonStyle=(value)=>   {

            let land = this.props.selectedLand
            return {margin:5, backgroundColor:(value === land ? '#639453' : '#d9fad9' ), borderColor: 'honeydew'}
        } 

     render(){
        
          
         return(
             <div className={Styles.container}>
                 <div>Filters</div>
                 <div className={Styles.timeContainer}>
                     <p>Launch year</p>
                     <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            width : '100%'
                        }}
                    />
                     <div>
                        <button onClick={()=>this.props.handleYearClick('2006')} style={this.getYearbuttonStyle('2006')}>2006</button>
                        <button onClick={()=>this.props.handleYearClick('2007')} style={this.getYearbuttonStyle('2007')}>2007</button>
                     </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2008')} style={this.getYearbuttonStyle('2008')}>2008</button>
                         <button onClick={()=>this.props.handleYearClick('2009')} style={this.getYearbuttonStyle('2009')}>2009</button>
                     </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2010')} style={this.getYearbuttonStyle('2010')}>2010</button>
                         <button onClick={()=>this.props.handleYearClick('2011')} style={this.getYearbuttonStyle('2011')}>2011</button>
                    </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2012')} style={this.getYearbuttonStyle('2012')}>2012</button>
                         <button onClick={()=>this.props.handleYearClick('2013')} style={this.getYearbuttonStyle('2013')}>2013</button>
                    </div>
                    <div>
                         <button onClick={()=>this.props.handleYearClick('2014')} style={this.getYearbuttonStyle('2014')}>2014</button>
                         <button onClick={()=>this.props.handleYearClick('2015')} style={this.getYearbuttonStyle('2015')}>2015</button>
                    </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2016')} style={this.getYearbuttonStyle('2016')}>2016</button>
                         <button onClick={()=>this.props.handleYearClick('2017')} style={this.getYearbuttonStyle('2017')}>2017</button>
                    </div>
                     <div>
                        <button onClick={()=>this.props.handleYearClick('2018')} style={this.getYearbuttonStyle('2018')}>2018</button>
                        <button onClick={()=>this.props.handleYearClick('2019')} style={this.getYearbuttonStyle('2019')}>2019</button>
                    </div>
                     <div>
                         <button onClick={()=>this.props.handleYearClick('2020')} style={this.getYearbuttonStyle('2020')}>2020</button>
                    </div>
                     
                 </div>
                 <div className={Styles.launchContainer} >
                    <div>
                    <p>Successful Launch </p>
                        <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            width : '100%'
                        }}
                    /></div>
                     
                     <div>
                         <button onClick={()=>this.props.handleLaunchClick(true)}style={this.getLaunchbuttonStyle(true)}>True</button>
                        <button onClick={()=>this.props.handleLaunchClick(false)} style={this.getLaunchbuttonStyle(false)}>false</button>
                    </div>
                 </div>
                 <div className={Styles.launchContainer} >
                    <div>
                    <p>Successful Landing </p>
                        <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: 1,
                            width : '100%'
                        }}
                    /></div>
                     
                     <div>
                         <button onClick={()=>this.props.handleLandClick(true)}style={this.getLandbuttonStyle(true)}>True</button>
                        <button onClick={()=>this.props.handleLandClick(false)} style={this.getLandbuttonStyle(false)}>false</button>
                    </div>
                 </div>

                 
            </div>
         )
     } 

}
