import './App.css';

import { Route, Switch } from 'react-router-dom'

import MainPage from './nx/components/mainpage/mainpage'

import Header from './nx/components/mainpage/header'
import NavBar from './nx/components/mainpage/navbar'
import Footer from './nx/components/mainpage/footer'

import PredictMain from './nx/components/predict_styles/predict_main'
import RecSysMain  from './nx/components/recommendations/recsys_main'
import CreationSelect from './nx/components/creations/creation_select'
import About from './nx/components/mainpage/about'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div class="container">
      <Header />
      <hr/>
      <NavBar />
      <hr/>
      <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/style' component={PredictMain}/>
          <Route exact path='/creation' component={CreationSelect}/>
          <Route exact path='/recsys' component={RecSysMain}/>
          <Route exact path='/about' component={About}/>
      </Switch>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
