import React from "react";
import "./footer.css"

function Footer(){
    return(
        <div className="bg-primary footer">
            <div class="social-logos">
                <a class="social-logo" href="https://github.com/KhalidRajan"><img src="images/github-social.png"/></a>
                <a class="social-logo" href="https://www.linkedin.com/in/khalid-rajan-620771156/"><img src="/images/linkedin.png"/></a>
                <a class="social-logo" href="https://twitter.com/KhalidRajan"><img src="/images/twitter.png"/></a>
            </div>
            <p className="footer-text">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
    );
}

export default Footer;





