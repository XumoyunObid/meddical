import niggas from '../../assets/homee/newsNiggas.png'
import Eyeicon from './../../icons/eye-icon';
import Redheart from './../../icons/redheart';

export const ExportNewsCard = () => {
    try {
        return <div className='newCarttt'>
            <div className="newCards">
                <div>
                    <img src={niggas} className='niggas' />
                </div>
                <div className="newCardsText">
                    <h1>Monday 05, September 2021 | By Author</h1>
                    <h2>This Article’s Title goes Here,  but not too long.</h2>
                    <div className='hear'>
                        <span className='hearts'><Eyeicon /> 68</span>
                        <span className='hearts'><Redheart /> 86</span>
                    </div>
                </div>
            </div>
            <div className="newCards">
                <div>
                    <img src={niggas} className='niggas' />
                </div>
                <div className="newCardsText">
                    <h1>Monday 05, September 2021 | By Author</h1>
                    <h2>This Article’s Title goes Here,  but not too long.</h2>
                    <div className='hear'>
                        <span className='hearts'><Eyeicon /> 68</span>
                        <span className='hearts'><Redheart /> 86</span>
                    </div>
                </div>
            </div>
            <div className="newCards">
                <div>
                    <img src={niggas} className='niggas' />
                </div>
                <div className="newCardsText">
                    <h1>Monday 05, September 2021 | By Author</h1>
                    <h2>This Article’s Title goes Here,  but not too long.</h2>
                    <div className='hear'>
                        <span className='hearts'><Eyeicon /> 68</span>
                        <span className='hearts'><Redheart /> 86</span>
                    </div>
                </div>
            </div>
            <div className="newCards">
                <div>
                    <img src={niggas} className='niggas' />
                </div>
                <div className="newCardsText">
                    <h1>Monday 05, September 2021 | By Author</h1>
                    <h2>This Article’s Title goes Here,  but not too long.</h2>
                    <div className='hear'>
                        <span className='hearts'><Eyeicon /> 68</span>
                        <span className='hearts'><Redheart /> 86</span>
                    </div>
                </div>
            </div>
        </div>
    } catch (e) { console.log(e); }
}


const News = () => {
    return (
        <div className="news">
            <h1>Better information, Better health</h1>
            <h2>News</h2>
            <ExportNewsCard />
        </div>
    )
}

export default News
