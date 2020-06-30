import React from "react";
import { Provider } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { basket, home, chatbox, personCircle, square } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import ShopPage from "./pages/ShopPage";
import StorePage from "./pages/StorePage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import SocialPage from "./pages/SocialPage";
import TestPage from "./pages/TestPage";
import { AppContextProvider } from "./State";
import store from "./store";

const App: React.FC = () => {
  return (
    <IonApp>
      <Provider store={store}>
        <AppContextProvider>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/tab1" component={Tab1} exact={true} />
                <Route path="/groups" component={SocialPage} exact={true} />
                <Route path="/shop" component={ShopPage} exact={true} />
                <Route path="/store" component={StorePage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/test" component={TestPage} />
                <Route
                  path="/"
                  render={() => <Redirect to="/tab1" />}
                  exact={true}
                />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="test" href="/test">
                  <IonIcon icon={square} />
                  <IonLabel>Test</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab1" href="/tab1">
                  <IonIcon icon={square} />
                  <IonLabel>Examples</IonLabel>
                </IonTabButton>
                <IonTabButton tab="groups" href="/groups">
                  <IonIcon icon={chatbox} />
                  <IonLabel>Groups</IonLabel>
                </IonTabButton>
                <IonTabButton tab="shop" href="/shop">
                  <IonIcon icon={basket} />
                  <IonLabel>Shop</IonLabel>
                </IonTabButton>
                <IonTabButton tab="store" href="/store">
                  <IonIcon icon={home} />
                  <IonLabel>Store</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile">
                  <IonIcon icon={personCircle} />
                  <IonLabel>My Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </AppContextProvider>
      </Provider>
    </IonApp>
  );
};

export default App;
