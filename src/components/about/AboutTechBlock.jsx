
import * as globalStyles from '../../styles/app.module.css'
import TechComponents from '../global/TechComponent';
import AboutBlockHeading from './AboutBlockHeading';

const AboutTechBlock = () => {
    return(
        <div className={globalStyles.block} style={{height:'fit-content',marginBottom:'20svh',minHeight:'20svh'}}>
            <AboutBlockHeading style={{paddingLeft:'6vw',marginBottom:'5svh'}} text={'технологии'} />
            <TechComponents />
        </div>
    )
}

export default AboutTechBlock;