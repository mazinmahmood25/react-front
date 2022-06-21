

import { BrowserRouter as  Switch, Route,  } from 'react-router-dom';
import Buttons from '../components/Button/Button'
import Cards from '../components/Cards/Cards'
import Color from '../components/Color/Color'
import Border from '../components/Border/Border'
import Animations from '../components/Animations/Animations'
import Other from '../components/Other/Other'
import Tables from '../components/Tables/Tables'
const PagesRouts = ()=>{

    return (
<>
          <Switch>
                  <Route path="/buttons"  element={<Buttons />}/>
                  <Route path="/cards"  element={<Cards />}/>
                  <Route path="/colors"  element={<Color />}/>
                  <Route path="/borders"  element={<Border /> }/>                                       
                  <Route path="/animations"  element={<Animations />}/>
                  <Route path="/other"  element={<Other />}/>
                  <Route path="/tables"  element={<Tables />}/>
                </Switch>
            </>
        
      )
}

export default PagesRouts