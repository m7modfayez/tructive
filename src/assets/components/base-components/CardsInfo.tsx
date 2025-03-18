

interface DriverInfoProps {
    onChildClick: () => void,
    totalCard: {cardName: string, number: number, icon: any},
    bestCard: {cardName: string, number: number, name: string},
    worstCard: {cardName: string, number: number, name: string},
  }

function CardInfo({totalCard, bestCard, worstCard , onChildClick}: DriverInfoProps) {
    
 

    return(
        <>
          <div className="drivers" >

            <div onClick={onChildClick} className="driver tot-drivers">
                <h2>{totalCard.cardName}</h2>
                {/* <p>click to see</p> */}
                <h2>{totalCard.number}</h2>
                {totalCard.icon}
                {/* < totalCard.icon size={70} style={{ margin:'20px', float: 'right',}} /> */}
                {/* <IoPersonOutline size={70} style={{ margin:'20px', float: 'right',}} /> */}
            </div>

            <div className="driver" style={{backgroundColor:'rgb(183, 255, 189)',}}>
                <h2>{bestCard.cardName}</h2>
                <h2>{bestCard.number}</h2>
                <h4>{bestCard.name}</h4>

            </div>

            <div className="driver" style={{backgroundColor:'rgb(255, 203, 203)',}}>
                <h2>{worstCard.cardName}</h2>
                <h2>{worstCard.number}</h2>
                <h4>{worstCard.name}</h4>

            </div>

          </div>
        </>
    )
}

export default CardInfo;