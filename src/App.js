import React from 'react'
import { BrowserRouter,  Switch,  Route } from 'react-router-dom'

// importo componentes
import Horario from './Components/Horario';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Horario />
                </Route>
                <Route exact  path="/tomorrow">
                    <Horario Action='tomorrow' />
                </Route>
                <Route component={Horario}/>
            </Switch>
        </BrowserRouter>
    )
}
