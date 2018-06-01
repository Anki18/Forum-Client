import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import About from './About';
import ThreadComponent from './ThreadComponent';

const MainComponent = props =>(
        <main>
            {/* <Switch>
                <Route exact path ="/" component ={()=><LoginComponent {...props}/>} />
                <Route exact path ="/about" component ={About}/>
                <Route exact path ="/thread" component ={ThreadComponent}/>
            </Switch> */}
        </main>
) 

export default MainComponent;