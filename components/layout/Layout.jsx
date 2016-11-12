import React, {Component} from "react";

class Layout extends Component {
    render () {
        var {children} = this.props;

        return (
            <div>
                <div>
                    this is the layout
                </div>
                {children}
            </div>
        )
    }
}

export default Layout;