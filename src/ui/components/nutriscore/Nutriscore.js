import "./Nutriscore.css";
import { cal, glu, lip, prot } from "../../../assets/icons";
import { NUTRISCORE_LIST } from "..";
import { useEffect, useState } from "react";
import { getNutriCountFromNutriName } from "../../../services/Services";
import PropTypes from "prop-types";

function Nutriscore(props) {
    const [count, setCount] = useState(0);
    const name = props.name;
    let src;
    let suffix;
    switch(name) {
        case NUTRISCORE_LIST.Calorie :
            src = cal;
            suffix = 'kcal';
            break;
        case NUTRISCORE_LIST.Glucide :
            src = glu;
            suffix = 'g';
            break;
        case NUTRISCORE_LIST.Lipide :
            src = lip;
            suffix = 'g';
            break;
        case NUTRISCORE_LIST.Protein :
            src = prot;
            suffix = 'g';
            break;
        default :
            throw new Error("can't find valid nutriment");
    }
    useEffect(() => {
      getNutriCountFromNutriName(name).then(nutri => setCount(nutri));
    })
    
    return (
        <div className="nutri-container">
            <div className={"nutri-icon-container " + name}>
                <img src={src} alt={name} />
            </div>
            <div className="nutri-text-container">
                <p className="nutri-score">{count + suffix}</p>
                <p className="nutri-name">{name}</p>
            </div>
        </div>
    )

}

Nutriscore.propTypes = {
    name: PropTypes.string.isRequired
}

export default Nutriscore;