import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import LoadingSpinner from './loadingSpinner';
import SeasonDisplay from './SeasonDisplay'

// const App = (props) => {
//   let latitude,longitude;
//   let currentDate = new Date();
//   let season = '';
//   window.navigator.geolocation.getCurrentPosition((position)=>{
//     console.log('location is ',position);
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     if(latitude >= 0){
//       if(currentDate.getMonth() > 6){
//         season = 'winter'
//       }else{
//         season = 'summer';
//       }
//     }else{
//       if(currentDate.getMonth() < 6){
//         season = 'summer'
//       }else{
//         season = 'winter';
//       } 
//     }
//   },(err)=>{
//     console.log('ERROR',err);
//   })
//   return (<div>
//   Seasons 
//   {props.children}
//   </div>);
// }

class App extends React.Component{

  state = { latitude : null,error: '',};
  componentDidMount(){
    console.log('componentDidMount')
    window.navigator.geolocation.getCurrentPosition((position)=>{
      this.setState({latitude:position.coords.latitude,error: ''})
    },(err)=>{
      this.setState({latitude:null,error: 'Location Permission Denied by the user'})
    })
  }
 
  renderContent(){
    if( this.state.error && !this.state.latitude){
      return <div>
      {this.state.error}. please reset From the permissions in your browser 
    </div>;
    }
    if(!this.state.error && this.state.latitude){
      return <SeasonDisplay lat={this.state.latitude}></SeasonDisplay>
    }
    return <LoadingSpinner/>;
  }
  render(){
    return (<div className='border red'>
      {this.renderContent()}
    </div>);
  }    
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);