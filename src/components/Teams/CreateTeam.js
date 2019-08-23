import React, { Component } from "react";
import { connect } from "react-redux";
import { createTeam } from "../../store/actions/teamActions";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "o9u9uruq";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dzbl1zdnd/upload";

class CreateTeam extends Component {
  state = {
    badgeUrl: "",
    description: "",
    honours: [],
    leagueId: "",
    name: "",
    nationId: ""
  };

  onImageDrop(files) {
    this.setState({
      badgeUrl: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
            badgeUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    // const { auth } = this.props;
    // if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Team</h5>
          <div className="input-field">
            <input
              placeholder="Team Name"
              id="name"
              type="text"
              class="validate"
              onChange={this.handleChange}
            />
            <label htmlFor="name" />
          </div>
          <div className="input-field">
            <label htmlFor="leagueId" />
            <input
              placeholder="LeagueID"
              type="text"
              id="leagueId"
              class="validate"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="nationId" />
            <input
              placeholder="NationId"
              type="text"
              id="nationId"
              class="validate"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="description" />
            <textarea
              placeholder="Description"
              id="description"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <div className="FileUpload">...</div>

            <div>
              {this.state.badgeUrl === "" ? null : (
                <div>
                  <p>{this.state.badgeUrl.name}</p>
                  <img src={this.state.badgeUrl} />
                </div>
              )}
            </div>
          </div>

          <div className="input-field">
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              accept="image/*"
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => {
                return (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                      <p>
                        Try dropping some files here, or click to select files
                        to upload the badge
                      </p>
                    }
                  </div>
                );
              }}
            </Dropzone>
          </div>

          <div class="row">
            <div class="input-field col offset-s6 s6">
              <button className="btn pink lighten-1 z-depth-0">
                Create Team
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTeam(this.state);
    this.props.history.push("/");
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    createTeam: team => dispatch(createTeam(team))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTeam);
