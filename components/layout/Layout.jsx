import React, {Component} from "react";

import styles from "./layoutStyle.scss";

class Layout extends Component {
    render () {
        var {children} = this.props;

        return (
            <div className={styles.content}>
                <div>
                    this is the layout
                </div>
                {children}
            </div>
        )
    }
}

export default Layout;