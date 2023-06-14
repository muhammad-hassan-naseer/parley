import {Route} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"
import Faq from './components/Faq';
import landingPage from './components/landingPage';
import RecentTrades from './components/RecentTrades';
import Settings from './components/Settings';
import UnlockMetaMask from './components/UnlockMetaMask';
import CommonSports from './components/CommonSports';
import StartingSoon from './components/StartingSoon';
function App() {
  return (
    <div >
        <BrowserRouter>
   <Route exact path='/' component={landingPage}/>
   <Route exact path='/settings' component={Settings}/>
   <Route exact path='/trades' component={RecentTrades}/>
   <Route exact path='/unlock' component={UnlockMetaMask}/>
   <Route exact path='/faq' component={Faq}/>
   <Route exact path='/common' component={CommonSports}/>
   <Route exact path='/soon' component={StartingSoon}/>

   </BrowserRouter>
    </div>
  );
}

export default App;
