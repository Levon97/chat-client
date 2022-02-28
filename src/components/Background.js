const Background = (props) => {
  return (
    <div className="container-fluid d-flex  justify-content-center align-items-center globalBackground">
      {props.children}
    </div>
  );
};

export default Background;
