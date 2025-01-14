import React from 'react'

const BillingsInfo = () => {
    return (
        <>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="checkout-area-bg bg-white">
                        <div className="check-heading">
                            <h3>Billings Information</h3>
                        </div>
                        <div className="check-out-form">
                            <form method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="fname">First name</label>
                                            <input type="text" required="" className="form-control" id="fname"
                                                placeholder="First name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="lname">Last name</label>
                                            <input type="text" required="" className="form-control" id="lname"
                                                placeholder="Last name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="cname">Company Name</label>
                                            <input className="form-control" required="" type="text" id="cname"
                                                placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="email">Email Addresse</label>
                                            <input className="form-control" required="" type="text" id="email"
                                                placeholder="info@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="country">Country</label>
                                            <select className="form-control first_null" id="country">
                                                <option value="">Select an option...</option>
                                                <option value="AX">usa</option>
                                                <option value="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="city">State/City</label>
                                            <select className="form-control first_null" id="city">
                                                <option value="">Select an option...</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="AF">Afghanistan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="zip">State/City</label>
                                            <input type="text" className="form-control" id="zip" required=""
                                                placeholder="Enter Your zipcode" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="faddress">Full Address</label>
                                            <input type="text" className="form-control" id="faddress" required=""
                                                placeholder="Enter your address here.." />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div className="form-group">
                                            <label for="messages">Additional Notes</label>
                                            <textarea rows="5" className="form-control" id="messages"
                                                placeholder="Order notes"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-=12 col-12">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="materialUnchecked" />
                                            <label className="form-check-label" for="materialUnchecked">Save In Address
                                                Book</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default BillingsInfo
