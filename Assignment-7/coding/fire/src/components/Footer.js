// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By Thirupathi
        <i className="fa-solid fa-heart"></i>
        
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;