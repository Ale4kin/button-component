const CreateButton = ({className, buttonText, headerText, src}) => {
    return (
        <div className='wrapper'>
        <div className='wrapper__header'>{headerText}</div>
        <button className={className}>
            {buttonText}
            <img src={src} alt="shopping"/>
        </button>
        </div>
        
    )
  }
  
  export default CreateButton;