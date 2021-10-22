import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home/components/Home";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./shared/Header/Header";
import {Popup} from "./shared/Popup/Popup";
import {ThemeProvider} from "./provider/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <div className={'global-container'}>
                {/*<Popup/>*/}
                <div className={'container'}>
                    <Header/>
                    <Switch>
                        <Route path={'/'} component={Home}/>
                        <Route path={'/month-statistics'} exact component={MonthStatistics}/>
                    </Switch>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App