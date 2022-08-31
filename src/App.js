import CreateButton from './Button';

import './App.scss';
import icon from './addShoppingCart.svg';

function App() {
    return (
      <div className="App">
        <header className="App-header">Buttons</header>
            <CreateButton className={"gray"} buttonText="Default" headerText="<Button />"/>
            <CreateButton className={"outline"} buttonText="Default" headerText={"<Button variant=”outline” />"}/>
            <CreateButton className={"text"} buttonText="Default" headerText={"<Button variant=”text” />"}/>
            <CreateButton className={"disableShadow"} buttonText="Default" headerText={"<Button disableShadow />"}/>
            <div className="flex">
            <CreateButton className={"disabled"} buttonText="Default" headerText={"<Button disabled />"}/>
            <CreateButton className={"disabledText"} buttonText="Default" headerText={"<Button variant=”text” disabled />"}/>
            </div>
            <div className="flex">
            <CreateButton className={"startIcon"} buttonText={"Default"} headerText={"<Button startIcon=”local_grocery_store” />"} src={icon} />
            <CreateButton className={"endIcon"} buttonText="Default" headerText={"<Button endIcon=”local_grocery_store” />"} src={icon}/>
            </div>
            <div className="flex">
            <CreateButton className={"sm"} buttonText="Default" headerText={"<Button size=”sm” />"}/>
            <CreateButton className={"md"} buttonText="Default" headerText={"<Button size=”md” />"}/>
            <CreateButton className={"lg"} buttonText="Default" headerText={"<Button size=”lg” />"}/>
            </div>
            <div className='flex'>
            <CreateButton className={"gray"} buttonText="Default" headerText={"<Button color=”default” />"}/>
            <CreateButton className={"md"} buttonText="Default" headerText={"<Button color=”primary” />"}/>
            <CreateButton className={"secondary"} buttonText="Default" headerText={"<Button color=”secondary” />"}/>
            <CreateButton className={"danger"} buttonText="Default" headerText={"<Button color=”danger” />"}/>
            </div>
            <footer>created by Ale4kin - devChallenges.io</footer>
      </div>
    );

  } 
  
  export default App;
