import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
    renderErr({ error, touched }) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    renderInput = (formProps) => {
        let cName = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
            <div className={cName}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderErr(formProps.meta)}
            </div>
        );
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.description = "You must enter a description";
    }
    return errors;
}

export default reduxForm({
    form: "streamForm",
    validate: validate,
})(StreamForm);