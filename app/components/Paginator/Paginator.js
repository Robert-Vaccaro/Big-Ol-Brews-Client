import React from 'react';

class Paginator extends React.Component {

    render() {
        let pages = Math.ceil(this.props.total/this.props.pageSize);
        return (
            <div className="slds-grid slds-grid--vertical-align-center slds-m-horizontal--large">
                <div className="slds-col slds-p-around--xx-small">
                    <button className={"slds-button slds-button--neutral" + (this.props.page <= 1 ? " slds-hide" : "")} onClick={this.props.onPrevious}>
                        <p>Last Page</p>
                    </button>
                </div>
                <div className="slds-col slds-text-align--center slds-p-around--xx-small">
                    <div className="legend">{this.props.total} beers • page {this.props.page}/{pages}</div>
                </div>
                <div className="slds-col slds-text-align--right slds-p-around--xx-small">
                    <button className={"slds-button slds-button--neutral" + (this.props.page >= pages ? " slds-hide" : "")} onClick={this.props.onNext}>
                    <p>Next Page</p>
                    </button>
                </div>
            </div>
        );
    }
};

export default Paginator;
