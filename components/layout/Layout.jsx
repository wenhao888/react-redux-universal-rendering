import React, {Component} from "react";

import styles from "./layoutStyle.scss";

class Layout extends Component {
    render () {
        var {children} = this.props;

        return (
            <div >
                <div>
                    this is the layout
                </div>
                {children}
            </div>
        )
    }
}

export default Layout;