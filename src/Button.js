const CreateButton = ({className, headerText, src}) => {

    const image = <><div>Default</div><img src={src} alt="shopping"/></>;

    const buttonText = (className === "startIcon" || className === "endIcon") ? image : "Default";

    return (
        <div className='wrapper'>
        <div className='wrapper__header'>{headerText}</div>
        <button className={className}>
            {buttonText}
        </button>
        </div>
        
    )
  }

  
  export default CreateButton;