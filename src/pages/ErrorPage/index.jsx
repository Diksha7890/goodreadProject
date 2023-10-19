const errorPage = () => {
  return (
    <>
      <div className="container">
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            margin: "50px",
            textAlign: "center",
          }}
        >
          <h1>404, Not Found</h1>
          <p>Please try again</p>
        </div>
      </div>
    </>
  );
};
export default errorPage;
