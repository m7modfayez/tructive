
type CompanyProps = {
    companyName: string;
  };

function ComapnyName({companyName}: CompanyProps) {

    return(
        <>
          <div style={{margin: '0px auto 0px auto', width: "fit-content", color:'#3D9FEE' }}>
                 <h1>{companyName}</h1>
          </div>
        </>
    )
}

export default ComapnyName;