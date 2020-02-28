import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Axios from 'axios'
class CurrentTrips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page_data : {
        current_trips : [],
        pending_trips : [],
        upcoming_trips : []
      }
    }
    this.handleCancelConfirmModalOpen = this.handleCancelConfirmModalOpen.bind(this)
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this)
  }
  componentDidMount() {
    fetch('/ajax/dashboard/getcurrentTripsList')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        page_data : data.page_data
      })
    })
  }
  handleCancelSubmit(e, index, status){
    e.preventDefault()
    let trip_id = this.state.page_data.pending_trips[index].id
    Axios.post('/ajax/trips/cancel/' + trip_id, {
      cancel_reason : e.target.cancel_reason.value,
      cancel_message : e.target.cancel_message.value,
      decline_reason_other : e.target.decline_reason_other.value,
    })
    .then((response) =>{
       console.log(response)
       if(response.data.status == 'success'){

        this.setState({ page_data : response.data.page_data})
       }
       else{
         alert('Faild')
       }

    })
    console.log(index, status, e.target.cancel_message.value)
  }
  handleCancelConfirmModalOpen(e, index, status){
    e.preventDefault()

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui bg-primary p-4 text-white'>
            <h2>Confirm to cancel</h2>

            <div>
          <h5>Are you sure that you want to cancel the request?</h5>
          <h6 className='text-white mt-1 mb-1'>Listing Name : {status == 'Pending' ? this.state.page_data.pending_trips[index].rooms.name: (status =='Current' ? this.state.page_data.current_trips[index].rooms.name : this.state.page_data.upcoming_trips[index].rooms.name)}</h6>
          <form acceptCharset="UTF-8" onSubmit={(event) => {this.handleCancelSubmit(event, index, status);  onClose()}} id="cancel_reservation_form" method="post" name="cancel_reservation_form">
        <div className="panel-body p-0">
          <div id="decline_reason_container">
            <p>
            Help us improve your experience. What's the main reason for Cancelling this Reservation?
            </p>
            <p>
              <strong>
              Your response is not shared with the host
              </strong>
            </p>
            <div className="select">
            <select id="cancel_reason" name="cancel_reason">
              <option value>Why are you declining
              </option>
              <option value="no_longer_need_accommodations">I no longer need accommodations
              </option>
              <option value="travel_dates_changed">My travel have dates changed
              </option>
              <option value="made_the_reservation_by_accident">I made the reservation by accident
              </option>
              <option value="I_have_an_extenuating_circumstance">I have  an extenuating circumstance
              </option>
              <option value="my_host_needs_to_cancel">My host need to cancel
              </option>
              <option value="uncomfortable_with_the_host">I'm uncomfortable with the host
              </option>
              <option value="place_not_okay">The place is not what I expected
              </option>
              <option value="other">Other
              </option>
            </select>
            </div>
            <div id="cancel_reason_other_div" className="hide row-space-top-2">
              <label htmlFor="cancel_reason_other">
              Why are you cancel?
              </label>
              <textarea id="decline_reason_other" name="decline_reason_other" rows={2}/>
            </div>
          </div>
          <label htmlFor="cancel_message" className="row-space-top-2">
          Type message to Host
          </label>
          <textarea cols={40} id="cancel_message" name="cancel_message" rows={4}/>
          <input type="hidden" name="id" id="reserve_code" defaultValue />
        </div>
        <div className="panel-footer">
          <input type="hidden" name="decision" defaultValue="decline" />
          <button className='btn btn-danger' onClick={onClose}>No</button>
            <button className='btn btn-success ml-4' type='submit'>Yes, I want to cancel!</button>
        </div>
      </form>

       </div>

          </div>
        )
      }
    })
  }
  render() {
    let page_content = [];

      let trips_list = this.state.page_data.current_trips.map((trip) => {
        return <tr key={trip.id}>
        <td className="status">

            <span className={"label label-" + trip.status_color}>
              {trip.status}
              </span>

          <br />
        </td>
        <td className="location">
          <a   >
            {trip.rooms.name}
          </a>
          <br />

         {trip.room_address_city_or_state}
          </td>
        <td className="host">
          <a >{trip.host}
            </a>
        </td>
        <td className="dates">{trip.dates_subject}
          </td>
        <td>
          <ul className="unstyled button-list list-unstyled">
            <li className="row-space-1">
              <a>Contact Host</a>
            </li>
          </ul>
        </td>
      </tr>

      })
      page_content.push(
        <div className="aside-main-content">
        <div className="side-cnt">
            <div className="head-label">
                <h4>Current Trips</h4>
        </div>
      <div className="aside-main-cn">

                                    <div className="your-trips_ your-prev-trips_">
                                        <div className="table-responsive"></div>
        <table className="table panel-body space-1">
          <tbody>
            <tr>
              <th>Status
                </th>
              <th>Location
                </th>
              <th>Host
                </th>
              <th>Dates
                </th>
              <th>Options
                </th>
            </tr>
            {trips_list.length ? trips_list : <tr><td colSpan='100%' className='text-center'>You have no trips!</td></tr>}
           </tbody>
        </table>
      </div>
      </div>
    </div>
    </div>
      )


        trips_list = this.state.page_data.pending_trips.map((trip, index) => {
        return <tr key={trip.id}>
        <td className="status">

            <span className={"label label-" + trip.status_color}>
              {trip.status}
              </span>

          <br />
        </td>
        <td className="location">
          <a   >
            {trip.rooms.name}
          </a>
          <br/>

         {trip.room_address_city_or_state}
          </td>
        <td className="host">
          <a >{trip.host}
            </a>
        </td>
        <td className="dates">{trip.dates_subject}
          </td>
        <td>
          <ul className="unstyled button-list list-unstyled">
            <li className="row-space-1">


              <a className="button-steel" title='Are you sure that you want to cancel the request? Any money transacted will be refunded.' onClick={(event) => {this.handleCancelConfirmModalOpen(event, index, trip.status);}} >Cancel Request
                </a>
            </li>
          </ul>
        </td>
      </tr>

      })
      page_content.push(
        <div className="aside-main-content">
        <div className="side-cnt">
            <div className="head-label">
                <h4>Pending Trips</h4>
              </div>
              <div className="aside-main-cn">
                                    <div className="your-trips_ your-prev-trips_">
                                        <div className="table-responsive">
              <table className="table panel-body space-1">
                <tbody>
                  <tr>
                    <th>Status
                      </th>
                    <th>Location
                      </th>
                    <th>Host
                      </th>
                    <th>Dates
                      </th>
                    <th>Options
                      </th>
                  </tr>
                  {trips_list.length ? trips_list : <tr><td colSpan='100%' className='text-center'>You have no trips!</td></tr>}
                  </tbody>
              </table>
            </div>
            </div>
            </div>
          </div>
          </div>
      )


        trips_list = this.state.page_data.upcoming_trips.map((trip) => {
        return <tr key={trip.id}>
        <td className="status">

            <span className={"label label-" + trip.status_color}>
              {trip.status}
              </span>

          <br />
        </td>
        <td className="location">
          <a   >
            {trip.rooms.name}
          </a>
          <br />

         {trip.room_address_city_or_state}
          </td>
        <td className="host">
          <a >{trip.host}
            </a>
        </td>
        <td className="dates">{trip.dates_subject}
          </td>
        {/* <td>
          <ul className="unstyled button-list list-unstyled">
            <li className="row-space-1">

            </li>
          </ul>
        </td> */}
      </tr>

      })
      page_content.push(
        <div className="aside-main-content">
        <div className="side-cnt">
            <div className="head-label">
                <h4>Upcoming Trips</h4>
        </div>
        <div className="aside-main-cn">

      <div className="your-trips_ your-prev-trips_">
          <div className="table-responsive"></div>
        <table className="table panel-body space-1">
          <tbody>
            <tr>
              <th>Status
                </th>
              <th>Location
                </th>
              <th>Host
                </th>
              <th>Dates
                </th>
              {/* <th>Options
                </th> */}
            </tr>
            {trips_list.length ? trips_list : <tr><td colSpan='100%' className='text-center'>You have no trips!</td></tr>}
           </tbody>
        </table>
      </div>
      </div>

    </div>
    </div>
      )

    let page_data = page_content ? page_content : '<div>No Data</div>'
    return (  <div className="col-md-9">
  {page_data}
  </div>)
  }
}

export default CurrentTrips
