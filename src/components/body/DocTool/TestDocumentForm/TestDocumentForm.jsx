import React, {Component} from "react";
import PageTitle from "../../../modules/PageTitle/PageTitle";


class TestDocumentForm extends Component {
    render() {
        return (
            <div className='container'>
                <PageTitle title={'Fill the details'}/>
                <div className='row'>
                    <div className='col-md-4'>
                        <form>
                            <div className="form-group">
                                <select className="custom-select">
                                    <option selected>Select Document type to create</option>
                                    <option value="1">Test Documents</option>
                                </select>
                            </div>


                            <button type="submit" className="btn btn-primary">Next</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default TestDocumentForm