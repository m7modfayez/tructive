

interface DriverInfoProps {
    onChildClick: () => void,
    totalCard: {cardName: string, number: any, icon: any},
    bestCard: {cardName: string, number: any, name: string},
    worstCard: {cardName: string, number: any, name: string},
  }

function CardInfo({totalCard, bestCard, worstCard , onChildClick}: DriverInfoProps) {
    
 

    return(
        <div className="stats-grid">
            <div onClick={onChildClick} className="stats-card">
                <div className="stats-header">
                    <span className="stats-title">{totalCard.cardName}</span>
                    <div className="stats-icon">{totalCard.icon}</div>
                </div>
                <div className="stats-value">{totalCard.number || 0}</div>
                <div className="stats-description">Total companies in system</div>
            </div>

            <div onClick={onChildClick} className="stats-card">
                <div className="stats-header">
                    <span className="stats-title">{bestCard.cardName}</span>
                    <div className="stats-icon">📈</div>
                </div>
                <div className="stats-value">{bestCard.number || 0}</div>
                <div className="stats-description">{bestCard.name || 'N/A'}</div>
            </div>

            <div onClick={onChildClick} className="stats-card">
                <div className="stats-header">
                    <span className="stats-title">{worstCard.cardName}</span>
                    <div className="stats-icon">📉</div>
                </div>
                <div className="stats-value">{worstCard.number || 0}</div>
                <div className="stats-description">{worstCard.name || 'N/A'}</div>
            </div>
        </div>
    )
}

export default CardInfo;