
import React,{Component} from 'react'
import Styles from './styles.css'

export default class ListItem extends Component{

     render(){
       let {mission} =  this.props
        let imgUrl = mission.links.mission_patch ? mission.links.mission_patch :"https://images2.imgbox.com/94/85/7GzzSMBu_o.png"
         return(
        <div className={Styles.cardContainer}>
            <div  className={Styles.card}>
            <img src={imgUrl} alt="Loading..." loading="lazy" className={Styles.img}></img>
            <p style={{color:'blue'}}>{mission.mission_name } #{mission.flight_number }</p>
            <p> <label>Lauch Year :</label> <label style={{color:'skyblue'}}>{ mission.launch_year }</label></p>
            <p>
                <label>Lauch Success :</label> 
                { 
                    mission.launch_success  
                    ? <label style={{color:'#68ed61'}}>True</label> 
                : <label style={{color:'#fc8f83'}}>{`${mission.launch_success == null ? 'NA' :'False'}`}</label> 
                }
            </p>
            <p>
                <label>Landing Success :</label> 
                { 
                    ( mission.rocket.first_stage.cores[0].land_success)
                    ?<label style={{color:'#68ed61'}}>True</label> 
                : <label style={{color:'#fc8f83'}}>{`${ mission.launch_success && mission.rocket.first_stage.cores[0].land_success == null  
                     ? 'NA' :'False'}`}</label> 
                }
            </p>
        </div>
        </div>
             
         )
     } 

}
