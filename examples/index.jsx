import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Section from './Section';
import Anchor from '../src';
import styles from './index.styl';

class App extends React.Component {
    state = {
        counter: 0
    };

    render() {
        const name = 'React Anchor';
        const url = 'https://github.com/trendmicro-frontend/react-anchor';

        return (
            <div>
                <Nav name={name} url={url} />
                <div className={styles.container}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <Section className="row-md-3">
                                    <h4>Counter: {this.state.counter}</h4>
                                    <Anchor
                                        componentClass="button"
                                        style={{
                                            backgroundColor: '#fff',
                                            backgroundImage: 'none',
                                            border: '1px solid #ccc',
                                            padding: '6px 12px'
                                        }}
                                        onClick={() => {
                                            this.setState({
                                                counter: this.state.counter + 1
                                            });
                                        }}
                                    >
                                        <i className="fa fa-plus fa-fw" />
                                    </Anchor>
                                    &nbsp;
                                    <Anchor
                                        componentClass="button"
                                        style={{
                                            backgroundColor: '#fff',
                                            backgroundImage: 'none',
                                            border: '1px solid #ccc',
                                            padding: '6px 12px'
                                        }}
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
                                </Section>
                            </div>
                            <div className="col-md-6">
                                <Section className="row-md-3">
                                    <h4>Links</h4>
                                    <p>If you want to change styles, please set class to override default styles.</p>
                                    <Anchor>
                                        This link is default style.
                                    </Anchor>
                                    <br />
                                    <Anchor className={styles.displayUnderline}>
                                        This link always display underline.
                                    </Anchor>
                                    <br />
                                    <Anchor className={styles.removeUnderline}>
                                        This link always *not* display underline.
                                    </Anchor>
                                </Section>
                            </div>
                        </div>
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
