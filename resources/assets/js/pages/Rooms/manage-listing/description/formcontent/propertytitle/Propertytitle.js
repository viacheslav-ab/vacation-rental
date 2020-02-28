import React from 'react';

class Propertytitle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="row-space-2 clearfix" id="help-panel-name">
                <div className="row">
                    <div className="col-12">
                        <div className="base_priceamt">
                            <div id="js-name-count" className="row-space-top-1 h6 label-large text-right"> <span className="pull-left">
                                <label>Property Title <b className="requiredRJ">*</b></label>
                            </span> <span className="">{100-this.props.title.length}</span> characters left 
                            </div>
                            <input type="text" name="name" value={this.props.title} onChange={this.props.onChange} className="overview-title input-large name_required " placeholder="Be clear and descriptive." />
                            <p className="hide icon-rausch error-too-long row-space-top-1">Please shorten to save changes</p>
                            <p className="hide icon-rausch error-value-required row-space-top-1 name_required_msg">A value is required to save changes</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Propertytitle;