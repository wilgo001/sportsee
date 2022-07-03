import { useEffect, useState } from "react";
import { getFirstName } from "../../../services/Services";
import { AverageDuration, DailyActivity, ScoreChart, StatChart } from "../../charts";
import { Nutriscore, NUTRISCORE_LIST } from "../../components";
import "./Home.css";


function Home(props) {
    const [name, setName] = useState('visiteur');
    useEffect(() => {
      getFirstName().then(name => {
          setName(name);
      });
    })
    
    return(
        <div className="home-container">
            <h1>
                <span className="bonjour">Bonjour </span>
                <span className="name">{name}</span>
            </h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
            <div className="home-main">
                <div className="home-graph">
                    <DailyActivity className="graph dailyActivity"/>
                    <AverageDuration className="graph averageDuration"/>
                    <StatChart className="graph statChart"/>
                    <ScoreChart className="graph scoreChart"/>
                </div>
                <div className="home-nutriscores">
                    <Nutriscore name={NUTRISCORE_LIST.Calorie}/>
                    <Nutriscore name={NUTRISCORE_LIST.Protein}/>
                    <Nutriscore name={NUTRISCORE_LIST.Glucide}/>
                    <Nutriscore name={NUTRISCORE_LIST.Lipide}/>
                </div>
            </div>
        </div>
    )
}

export default Home;