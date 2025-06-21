
type CompanyProps = {
    companyName: any;
  };

function ComapnyName({companyName}: CompanyProps) {

    return(
        <>
          <div style={{margin: '40px auto 0px ', width: "fit-content", color:'#3D9FEE' }}>
                 <h1>{companyName}</h1>
          </div>
        </>
    )
}

export default ComapnyName;