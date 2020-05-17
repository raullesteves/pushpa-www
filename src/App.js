import React from 'react';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import coreStyles from 'react-awesome-slider/src/core/styles.scss';
import animationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Main, ChooseYourDestiny, Tabaco, Kumbaya } from "./screens"
import {
  blendGaram,
  blendZen,
  blendTribe,
  blendMoon,
  blendFresh
} from "./contants/images"

const Slider = () => {
  return (
    <AwesomeSlider
      animation="foldOutAnimation"
      cssModule={[coreStyles, animationStyles]}
      fillParent="true"
      bullets={false}
    >
      <div><ChooseYourDestiny /></div>
      <div>
        <Kumbaya
          imagem={blendFresh}
          nome={"BLEND FRESH"}
          ervas={"Menta - Sálvia - Erva Doce - Funcho - Folha de Amora - Macela - Calêndula"}
          descricao={"Ervas especialmente escolhidas para favorecer o equilíbrio, trazendo o frescor da menta como um alivio para as tensões do dia-a-dia."} />
      </div>
      <div>
        <Kumbaya
          imagem={blendGaram}
          nome={"BLEND GARAM"}
          ervas={"Cravo - Jasmim - Calêndula - Folha de Amora - Macela"}
          descricao={"O blend contém ervas com  propriedades estimulantes e ardentes que afloram a sensibilidade e instigam  nossos desejos."} />
      </div>
      <div>
        <Kumbaya
          imagem={blendMoon}
          nome={"BLEND MOON"}
          ervas={"Hibisco - Anis - Folha de Amora - Macela - Alfazema - Rosa Rubra"}
          descricao={"Essa mistura tem como base, ervas que simbolizam o ritmo biológico e as fases da vida, desperam sentimentos enérgicos e reflexivos."} />
      </div>
      <div>
        <Kumbaya
          imagem={blendTribe}
          nome={"BLEND TRIBE"}
          ervas={"Rubim (Mariajuanila) - Hibisco - Sálvia - Calêndula - Folha de Amora"}
          descricao={"Blend especial inspirado no uso das plantas para fins ritualístico de purificação e relaxamento. Possui sabor suave e lefe efeito inebriante"} />
      </div>
      <div>
        <Kumbaya
          imagem={blendZen}
          nome={"BLEND ZEN"}
          ervas={"Camomila - Calêndula - Sálvia - Passiflora - Macela"}
          descricao={"As ervas presentes nessa mistura possuem a função de elevar nossa paz de espírito e acalmar nosso corpo. Todas possuem propriedades calmantes, podendo ser aproveitadas para favorecer o sono, desacelerar a mente e aliviar o estresse."} />
      </div>
      <div><Tabaco /></div>
    </AwesomeSlider>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Main />
        <Switch>
          <Route path="/catalogo">
            <Slider />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
