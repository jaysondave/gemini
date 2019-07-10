import React from "react";
import BigCalendar from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import events from "../data/events";
import moment from "moment";
import AddEvent from "../AddEvent";

const localizer = BigCalendar.momentLocalizer(moment);

const users = [
  { image: "https://via.placeholder.com/150x150", email: "jhonsmith@example.com" },
  { image: "https://via.placeholder.com/150x150", email: "stella02@example.com" },
  { image: "https://via.placeholder.com/150x150", email: "chrris0254@example.com" }];

class MainPage extends React.Component {

  constructor() {
    super();
    this.state = {
      option: "All",
      addOpen: false,
      selectedEvent: null,
      selectedDate: null,
      startTime: null,
      endTime: null
    };
  }

  chooseColor = type => {
    switch (type) {
      case "workInProgress":
        return "#EF5350";
      case "expiringJob":
        return "#ec407a";
      case "appointment":
        return "#5c6bc0";
      default:
        return "#fff";
    }
  };
  handleRequestCloseAddEvent = (value) => {
    this.setState({selectedEvent: value, addOpen: false});
  };
  onTapNewSlot = (slotInfo) => {
    const msg = `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
    `\nend: ${slotInfo.end.toLocaleString()}` +
    `\naction: ${slotInfo.action}`;
    this.setState({startTime: slotInfo.start.toLocaleString(), endTime: slotInfo.end.toLocaleString(), addOpen: true})

  };
  onTapEvent = (event) => {
    console.log({event});
    this.setState({selectedEvent: event, addOpen: true})
  };
  handleChange = (date) => {
    this.setState({
      selectedDate: date
    });
  };
  render() {
    let options = ["All", "Document", "Certificate", "Rent", "Maintenance", "Work-In Progress"];
    const { addOpen, selectedDate } = this.state;
    return (
      <div className="app-calendar app-cul-calendar animated slideInUpTiny animation-duration-3">
        <div>
          <h3 className="callout">
            {" "}
            <select
              className='form-control'
              style={{ width: 200, display: "inline-block" }}
              defaultValue={"fr"}
              onChange={e => this.setState({ option: e.target.value })}
            >
              {
                options.map((c, idx) =>
                  <option key={idx} value={c}>{c}</option>
                )
              }
            </select>
          </h3>
        </div>

        <div className="row">
          <div className="col-md-2 p-2 mt-5">
            <div className="d-flex mb-3">
              <DatePicker
                inline
                selected={selectedDate ? new Date(selectedDate) : new Date()}
                onChange={this.handleChange}
              />
            </div>
            <div className="d-flex mb-2">
              <div className="" style={{ backgroundColor: "#EF5350", height: 25, flex: 1 }}/>
              <div className="p-relative" style={{ height: 25, flex: 2 }}>
                <div className="align-center ml-2">Work In Progress</div>
              </div>
            </div>

            <div className="d-flex mb-2">
              <div className="" style={{ backgroundColor: "#ec407a", height: 25, flex: 1 }}/>
              <div className="p-relative" style={{ height: 25, flex: 2 }}>
                <div className="align-center ml-2">Expiring Job</div>
              </div>
            </div>

            <div className="d-flex mb-2">
              <div className="" style={{ backgroundColor: "#5c6bc0", height: 25, flex: 1 }}/>
              <div className="p-relative" style={{ height: 25, flex: 2 }}>
                <div className="align-center ml-2">Appointment</div>
              </div>
            </div>


          </div>
          <div className="col-md-10">
            <BigCalendar
              selectable
              localizer={localizer}
              events={events}
              // culture={this.state.culture}
              eventPropGetter={event => {
                const backgroundColor = this.chooseColor(event.type);
                return { style: { backgroundColor } };
              }}
              date={selectedDate?new Date(selectedDate):null}
              defaultDate={new Date(2019, 3, 6)}
              onSelectEvent={event => this.onTapEvent(event)}
              onSelectSlot={(slotInfo) => this.onTapNewSlot(slotInfo)}
              onNavigate={(day) => {
                this.setState({
                  selectedDate: day,
                });
              }}
            />
          </div>

        </div>
        {addOpen &&
        <AddEvent selectedEvent={this.state.selectedEvent}
                  startTime={this.state.startTime}
                  endTime={this.state.endTime}
                  open={addOpen}
                  onClose={this.handleRequestCloseAddEvent}
        />
        }


      </div>
    );
  }
}

export default MainPage;
