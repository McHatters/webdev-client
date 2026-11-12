"use client";

const sayHello = (hello: string) => {
  alert(hello);
};

const sayName = (greeting: string) => {
  alert(greeting);
}

const sayOther = () => {
  alert("Sample from parent");
}

import ArrayStateVariable from './ArrayStateVariable';
import BooleanStateVariables from './BooleanStateVariables';
import ClickEvent from './ClickEvent';
import ContextExamples from './context/ContextExamples';
import ContextProfileForm from './context/ContextProfileForm';
import Counter from './Counter';
import CounterBroken from './CounterBroken';
import DateStateVariable from './DateStateVariable';
import Effect from './Effect';
import ObjectStateVariable from './ObjectStateVariable';
import ParentStateComponent from './ParentStateComponent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import ProfileForm from './profile/ProfileForm';
import PropDrilling from './PropDrilling';
import ReduxExamples from './redux/ReduxExamples';
import StringStateVariables from './StringStateVariables';
import UrlEncoding from './UrlEncoding';
import ZustandExamples from './zustand/ZustandExamples';
import ZustandProfileForm from './zustand/ZustandProfileForm';


export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions message="Hello from Lab 4!" theFunction={sayHello} message2="Caolan Disini" theFunction2={sayName} theOtherFunction={sayOther}></PassingFunctions>
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ContextProfileForm />
      <ZustandExamples />
      <ZustandProfileForm />
      <ReduxExamples />
      <Effect />
    </div>
  );
}