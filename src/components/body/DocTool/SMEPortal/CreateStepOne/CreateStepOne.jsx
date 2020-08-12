import React from "react";
import PageTitle from "../../../../modules/PageTitle/PageTitle";

export default class CreateStepOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/api/v1/folders")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let foldersList = Object.keys(items.response).map((k) => {
                return (
                    <option key={k}
                            value={JSON.stringify(items.response[k].folder_id).slice(1, -1)}>{JSON.stringify(items.response[k].folder_name).slice(1, -1)}</option>
                )
            }, this);
            return (
                <div className='container'>
                    <PageTitle title={'Fill the details'}/>
                    <div className='row' id='select-folder-screen'>
                        <div className='col-md-4'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="selectBucket">Select Bucket for Test Plan</label>
                                    <select class="form-control" id="selectBucket">
                                        {foldersList}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Next</button>
                            </form>
                        </div>
                    </div>


                    <div className='row' id='enter-test-doc-screen'>
                        <div className='col-md-4'>
                            <form>
                                <div className="form-group">
                                    lol
                                </div>
                                <button type="submit" className="btn btn-primary">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

