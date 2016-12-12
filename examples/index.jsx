import React from 'react';
import ReactDOM from 'react-dom';
import Anchor from '../src';

class App extends React.Component {
    state = {
        counter: 0
    };

    render() {
        return (
            <div
                style={{
                    margin: '0 auto',
                    width: 360
                }}
            >
                <div className="row">
                    <div className="col-sm-6">
                        <h4>Counter: {this.state.counter}</h4>
                    </div>
                    <div className="col-sm-6 text-right">
                        <div className="btn-group">
                            <Anchor
                                className="btn btn-default"
                                componentClass="button"
                                onClick={() => {
                                    this.setState({
                                        counter: this.state.counter + 1
                                    });
                                }}
                            >
                                <i className="fa fa-plus fa-fw" />
                            </Anchor>
                            <Anchor
                                className="btn btn-default"
                                componentClass="button"
                                onClick={() => {
                                    if (this.state.counter <= 0) {
                                        return;
                                    }
                                    this.setState({
                                        counter: this.state.counter - 1
                                    });
                                }}
                            >
                                <i className="fa fa-minus fa-fw" />
                            </Anchor>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <Anchor className="btn btn-default btn-block">
                            <i
                                className="fa fa-th-large fa-fw fa-2x"
                                style={{
                                    verticalAlign: 'middle'
                                }}
                            />
                            <span
                                style={{
                                    verticalAlign: 'middle'
                                }}
                            >
                                Block Button
                            </span>
                        </Anchor>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
