import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';
import { Redirect } from 'react-router-dom';

export default function (ComposedComponent) {
    class Authenticate extends Component {
        constructor() {
            super();
            this.state = {
                redirect: false
            };

            // this.setState({
            //     redirect: true
            // });
        }
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.addFlashMessage({
                    type: 'error',
                    text: "Please Login"
                });
                this.setState({ redirect: true });
            }
        }
        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.setState({ redirect: true });
            }
        }
        render() {
            return (
                <div>
                    {this.state.redirect ? <Redirect push to='/login' /> : <ComposedComponent {...this.props} />}
                </div>
            )
        }
    }
    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        };
    }
    return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}