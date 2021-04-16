import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer class="footer">
    <p>
      &copy;{new Date().getFullYear()} Made for CSE206 Web Technologies and Programming
    </p>
    <div class="credits">
       Created by Cenk Akay and Baran Eryürek
    </div>
  </footer>
  );
}

export default Footer;