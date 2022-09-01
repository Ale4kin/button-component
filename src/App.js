import CreateButton from './Button';

import './App.scss';
import icon from './addShoppingCart.svg';

function App() {
    return (
      <div className="App">
        <header className="App-header">Buttons</header>
            <CreateButton className={"gray"} headerText="<Button />"/>
            <CreateButton className={"outline"} headerText={"<Button variant=”outline” />"}/>
            <CreateButton className={"text"} headerText={"<Button variant=”text” />"}/>
            <CreateButton className={"disableShadow"} buttonText="Default" headerText={"<Button disableShadow />"}/>
            <div className="flex">
            <CreateButton className={"disabled"} headerText={"<Button disabled />"}/>
            <CreateButton className={"disabledText"} headerText={"<Button variant=”text” disabled />"}/>
            </div>
            <div className="flex">
            <CreateButton className={"startIcon"} headerText={"<Button startIcon=”local_grocery_store” />"} src={icon}></CreateButton>
            <CreateButton className={"endIcon"} headerText={"<Button endIcon=”local_grocery_store” />"} src={icon}/>
            </div>
            <div className="flex">
            <CreateButton className={"sm"} headerText={"<Button size=”sm” />"}/>
            <CreateButton className={"md"} headerText={"<Button size=”md” />"}/>
            <CreateButton className={"lg"} headerText={"<Button size=”lg” />"}/>
            </div>
            <div className='flex'>
            <CreateButton className={"gray"} headerText={"<Button color=”default” />"}/>
            <CreateButton className={"md"} headerText={"<Button color=”primary” />"}/>
            <CreateButton className={"secondary"} headerText={"<Button color=”secondary” />"}/>
            <CreateButton className={"danger"} headerText={"<Button color=”danger” />"}/>
            </div>
            <footer>created by Ale4kin - devChallenges.io</footer>
      </div>
    );

  } 
  
  export default App;
