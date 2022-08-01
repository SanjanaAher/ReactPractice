
import './App.css';
import IndexAsKey from './components/IndexAsKey';
import ListOfObject from './components/ListOfObject';
import NameList from './components/NameList';
import Navbar from './components/Navbar';
import StateAndSetState from './components/StateAndSetState';
import StateSetStateEx from './components/StateSetStateEx';
import PracticeSetState from './components/PracticeSetState';
import PropsAsFuncParameter from './components/PropsAsFuncParameter';
import PropsAsFuncBody from './components/PropsAsFuncBody';
import EventinfuncComp from './components/EventinfuncComp';
import EventinClassComp from './components/EventinClassComp';
import EventBind from './components/EventBind';
import MethodAsPropParent from './components/MethodAsPropParent';
import IfElseCondRender from './components/IfElseCondRender';
import ElementVarCondRender from './components/ElementVarCondRender';
import TernaryCondRender from './components/TernaryCondRender';
import ShortCircuitCondRend from './components/ShortCircuitCondRend';
import FormHandle from './components/FormHandle';
import ParentComponentforPure from './components/ParentComponentforPure';
import RefsDemo from './components/RefsDemo';
import ParentRefInClassCompo from './components/ParentRefInClassCompo';
import ParentForwardInput from './components/ParentForwardInput';
import PortalDemo from './components/PortalDemo';
import HOCClickCounter from './components/HOCClickCounter';


function App() {
  return (
   <>
 
   <Navbar title="TextUtils" />
   <NameList/>
   <ListOfObject/>
   <IndexAsKey/>
   <StateAndSetState />
   <StateSetStateEx />
    <PracticeSetState />
    <PropsAsFuncParameter name ='Sanju' fav='Ice-cream'/>
    <PropsAsFuncBody name ='Raj' fav='Khakra'/>
    <EventinfuncComp/>
    <EventinClassComp/>
    <EventBind/>
    <MethodAsPropParent />
    <IfElseCondRender/>
   <ElementVarCondRender/>
   <TernaryCondRender/>
   <ShortCircuitCondRend/>
   <FormHandle/>
   <ParentComponentforPure/>
   <RefsDemo/>
   <ParentRefInClassCompo/>
   <ParentForwardInput/>
   <PortalDemo/>
   <HOCClickCounter/>
   </>
  );
}

export default App;
