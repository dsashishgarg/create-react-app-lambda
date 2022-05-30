import React from "react"
import "styles/globalStyles.css";
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/hero.js";
import Services from "components/features/services.js";
import QualityWork from "components/features/qualitywork.js";
import BusinessSolution from "components/features/businessSolution.js";
import StepsToConnect from "components/features/stepsToConnect.js";
import Testimonial from "components/testimonials/testimonials.js";
import FAQ from "components/faqs/faqs.js";
import Form from "components/forms/forms.js";
import Footer from "components/footers/footer.js";

import { Route, Switch } from "react-router-dom";

import Login from "pages/Login.js";
import Signup from "pages/Signup.js";

const loginPageLink = <Route exact path="/login" component={Login} />;
const signUpPageLink = <Route exact path="/signUp" component={Signup} />;

// const SectionContainer = tw(Content2Xl)``;

function App() {
  return (
    <AnimationRevealPage>
      <Switch>
          <Route exact path="/">
            <Hero/>
            <Services/>
            <QualityWork/>
            <StepsToConnect/>
            <BusinessSolution/>
            <Testimonial />
            <FAQ />
            <Form />
            <Footer />
          </Route>
          <Route>{loginPageLink}</Route>
          <Route>{signUpPageLink}</Route>
        </Switch>
      
    </AnimationRevealPage>
  )
}

export default App



