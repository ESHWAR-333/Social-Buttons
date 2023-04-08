const Button = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return <button className={`button ${className}`}>{children}</button>;
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="subContainer">
      <Button className="yellow" children="Like" />
      <Button className="white" children="Comment" />
      <Button className="blue" children="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
