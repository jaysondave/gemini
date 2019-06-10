import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddCadastral from "../../AddCadastral";
import AddRent from "../../AddRent";
import AddSystem from "../../AddSystem";
import AddDocument from "../../AddDocument";
import AddCertificate from "../../AddCertificate";

class SubBuildingCell extends React.Component {

  onSubBuildingOptionSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };
  onCadastralClose = () => {
    this.setState({ addCadstral: false });
  };
  onRentClose = () => {
    this.setState({ addRent: false });
  };
  onSystemClose = () => {
    this.setState({ addSystem: false });
  };
  onDocumentClose = () => {
    this.setState({ addDocument: false });
  };
  onCertificateClose = () => {
    this.setState({ addCertificate: false });
  };
  onDeleteSubBuilding = (contact) => {
    this.setState({ addContactState: false });
    this.props.onDeleteContact(contact);
  };
  onEditCadstral = () => {
    this.setState({ menuState: false, addCadstral: true });
  };
  onEditRent = () => {
    this.setState({ menuState: false, addRent: true });
  };
  onEditSystem = () => {
    this.setState({ menuState: false, addSystem: true });
  };
  onEditDocument = () => {
    this.setState({ menuState: false, addDocument: true });
  };
  onEditCertificate = () => {
    this.setState({ menuState: false, addCertificate: true });
  };
  constructor() {
    super();
    this.state = {
      anchorEl: undefined,
      menuState: false,
      addCadstral: false,
      addRent: false,
      addSystem: false,
      addDocument: false,
      addCertificate: false
    };
  }

  render() {
    const {
      subBuilding,
      onSubBuildingSelect,
      onSaveSubBuilding,
      onDeleteSubBuilding,
      onSubBuildingItemSelect,
      onSaveCadastral,
      onSaveRent,
      onSaveSystem,
      onSaveDocument,
      onSaveCertificate
    } = this.props;
    const { menuState, anchorEl, addCadstral, addRent, addSystem, addDocument, addCertificate } = this.state;
    const { id, building_name, user_name, user_address, building_report } = subBuilding;

    const options = [
      "RENTS",
      "SYSTEMS",
      "DOCUMENTATIONS",
      "CADASTRAL",
      "CERTIFIED"
    ];
    return (

      <div className="contact-item module-list-item">

        <Checkbox color="primary"
          checked={subBuilding.selected}
          value="checkedF"
          onClick={() => {
            onSubBuildingSelect(subBuilding);
          }}
        />
        <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>

          <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }} onClick={() => {
            onSubBuildingItemSelect(subBuilding);
          }}>

            <div className="mx-1 mx-md-3"
              style={{ fontSize: 16, flex: 1, position: "relative" }}>
              <div style={{ position: "relative", top: "50%", transform: "translateY(-50%)" }}>{id}</div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 3 }}>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {building_name}
                </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                  {user_name},
                        </span>

                <span className="phone d-inline-block">
                  {user_address}
                </span>
              </div>
            </div>
            <div className="col con-inf-mw-100" style={{ flex: 1, textAlign: "center" }}>
              <p className="mb-0">
                <span className="text-truncate contact-name text-dark">
                  {"No.Reporter"}
                </span>
              </p>

              <div className="text-muted">
                <span className="email d-inline-block mr-2">
                  {building_report}
                </span>
              </div>
            </div>
          </div>
          <div className="col-auto px-1 actions d-none d-sm-flex">
            <IconButton className="icon-btn p-2" onClick={this.onSubBuildingOptionSelect}>
              <i className="zmdi zmdi-more-vert" />
            </IconButton>

            <Menu id="long-menu"
              anchorEl={anchorEl}
              open={menuState}
              onClose={this.handleRequestClose}

              MenuListProps={{
                style: {
                  width: 200
                }
              }}>
              {options.map(option =>
                <MenuItem key={option} onClick={() => {
                  if (option === "RENTS") {
                    this.onEditRent();
                  } else if (option === "SYSTEMS") {
                    this.onEditSystem();
                  } else if (option === "DOCUMENTATIONS") {
                    this.onEditDocument();
                  } else if (option === "CADASTRAL") {
                    this.onEditCadstral();
                  } else {
                    this.onEditCertificate();
                  }
                }
                }>
                  {option}
                </MenuItem>
              )}
            </Menu>
            {addCadstral &&
              <AddCadastral
                open={addCadstral}
                cadstral={subBuilding.cadstral}
                onSaveCadastral={onSaveCadastral}
                onCadastralClose={this.onCadastralClose}
              />
            }
            {addRent &&
              <AddRent
                open={addRent}
                rent={subBuilding.rent}
                onSaveRent={onSaveRent}
                onRentClose={this.onRentClose}
              />
            }
            {addSystem &&
            <AddSystem
              open={addSystem}
              rent={subBuilding.system}
              onSaveSystem={onSaveSystem}
              onSystemClose={this.onSystemClose}
            />
            }
            {addDocument &&
            <AddDocument
              open={addDocument}
              document={subBuilding.document}
              onSaveDocument={onSaveDocument}
              onDocumentClose={this.onDocumentClose}
            />}
            {addCertificate &&
            <AddCertificate
              open={addCertificate}
              certificate={subBuilding.certificate}
              onSaveCertificate={onSaveCertificate}
              onCertificateClose={this.onCertificateClose}
            />}
          </div>
        </div>
      </div>
    );
  }
}

export default SubBuildingCell;
