const UnitsToggle = ({toggleUnits}) => {

    const handleClick = () => {
        toggleUnits();
    } 
 
    return (
        <>
        <div onClick={handleClick}>
            <p>Ahoj button</p>
        </div>
        </>
    )
}

export default UnitsToggle