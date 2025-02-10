import DriverInfo from "./DriverInfo"

function DashboardBody() {

    return(
        <>
          <div className="dash-body">

            
            <div style={{marginLeft: '20%', color:'#3D9FEE' }}>
                <h1>Company Name</h1>
            </div>
            <DriverInfo />
          </div>
        </>
    )
}

export default DashboardBody;