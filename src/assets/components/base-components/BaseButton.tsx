
type ButtonProps = {
    name: string;
    className?: string; // Made optional
    baseButtonOnClick?: () => void; // More specific function type
  }  

function BaseButton({name, className, baseButtonOnClick}:ButtonProps) {
 
    const buttonOnClick = baseButtonOnClick;

    return(
        <>

            <button type="submit" onClick={buttonOnClick} className= {`driver-list-buttons ${className}`} > <b>{name}</b> </button>
        
        </>
    )
}

export default BaseButton;