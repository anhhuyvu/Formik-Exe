import React from 'react';
import './footer.css';

const PageFooter = () => {
    return(
        <footer className="foot">
            <div className="foot-content">
                <p>© 2019 Uber Technologies Inc. All Rights Reserved.</p>
                <p>Terms of Use | Legal Notices | Privacy & Security</p>
            </div>
            <div>
                <i class="fa fa-facebook-square" style={{color:"bue"}} ></i>
                <i class="fa fa-youtube" style={{color:"crimson"}}></i>
                <i class="fa fa-linkedin" style={{color:"darkcyan"}}></i>
            </div> 
        </footer>

    )
}
export default PageFooter;