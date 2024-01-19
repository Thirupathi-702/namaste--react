const Footer=()=>{
    const Year=new Date().getFullYear();
    return(<>
        <h1>{Year}</h1>
        <div className="footer">
        Created by 
        <i className="fa-solid fa-heart"></i>
        {/* <a href="https://www.linkedin.com/in" target="_blank">
        Chetan Nada
      </a> */}
      <i className="fa-solid fa-copyright"></i>
      {Year}
      <strong>
      Food<span>Fire</span></strong>
        </div>
        </>
    );
};
export default Footer;