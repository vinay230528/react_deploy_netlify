import React from "react";
import Aux from '../../hoc/Auxillary';
import '../Layout/Layout.css';
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";

const Layout = () => {
    return (
        <Aux>
            <div className="Layout">
                <NavigationItems />
            </div>
        </Aux>
    )
}

export default Layout;