const getSeason = (latitude) => {
    if(latitude >= 0){
        if((new Date()).getMonth() >=1 && (new Date()).getMonth() <=6){
            return 'Les hit a Beach!'
        }
        return 'Burr! isa chilly';
    }else{
        if((new Date()).getMonth() >=1 && (new Date()).getMonth() <=6){
            return  'Burr! isa chilly'
        }
        return 'Les hit a Beach!'
    }
}

const SeasonDisplay = (props) => {
    let latitude = props.lat; 
    let season = getSeason(latitude);
    let seasonConfig = {
        season: '',
        icon : '',
    }
    seasonConfig.season = season;
    seasonConfig.icon = season === 'summer' ?  'sun' : 'snowflake';

    return(
        <div>
<i className={`icon ${seasonConfig.icon}`}></i>
<h1>{seasonConfig.season}</h1>
<i className={`icon ${seasonConfig.icon}`}></i>
        </div>
        
    );
}


export default SeasonDisplay;