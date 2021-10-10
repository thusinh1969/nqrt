const ProgressBarNew = (props) => {
    const { borderColor, bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      //backgroundColor: "#ffffff",
      borderRadius: 50,
      margin: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      color: borderColor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 10,
      color: 'black',
      //fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBarNew;