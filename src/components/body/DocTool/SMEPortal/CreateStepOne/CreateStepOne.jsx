import React, {Component} from "react";
import PageTitle from "../../../../modules/PageTitle/PageTitle";


class CreateStepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/octocat")
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

        console.log(items);
        if (error) {
            return "LOL"
        } else {
            return (
                <div className='container'>
                    <PageTitle title={'Fill the details'}/>
                    <div className='row'>
                        <div className='col-md-4'>
                            <form>
                                <div className="form-group">
                                    {/*<select className="custom-select">*/}
                                    {/*    <option selected>Select Document type to create</option>*/}
                                    {/*    <option value="1">Test Documents</option>*/}
                                    {/*</select>*/}
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

export default CreateStepOne