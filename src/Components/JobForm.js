import React, { Component } from 'react';
import '../Styles/JobForm.css';

class JobForm extends Component {
  state = {
    jobTitle: '',
    company: '',
    companyLocation: '',
    jobDescription: '',
    salary: '',
    url: '',
    dateSaved: '',
    workLocation: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    // You can access the form data in this.state
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={this.state.jobTitle}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyLocation">Company Location</label>
            <input
              type="text"
              id="companyLocation"
              name="companyLocation"
              value={this.state.companyLocation}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={this.state.jobDescription}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={this.state.salary}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="url"
              id="url"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateSaved">Date Saved</label>
            <input
              type="date"
              id="dateSaved"
              name="dateSaved"
              value={this.state.dateSaved}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="workLocation">Work Location</label>
            <input
              type="text"
              id="workLocation"
              name="workLocation"
              value={this.state.workLocation}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default JobForm;
