import React from 'react';


export  class Fill extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: "option",
            selectedOption1: "option",
            selectedOption2: "option",
          };
        this.HandleChanges1 = this.HandleChanges1.bind(this);
        this.HandleChanges2 = this.HandleChanges2.bind(this);
        this.handleOptionChange=this.handleOptionChange.bind(this);
    }
    HandleChanges1(e)
    {
        this.setState({
            selectedOption1: e.target.value,
            });
     
    }
    HandleChanges2(e)
    {
        this.setState({
            selectedOption2: e.target.value,
           
            });
    }
    componentDidMount() {
     
    }

    componentDidUpdate(e) {
    
       
    }

    componentWillUnmount() {
       
    }
    handleOptionChange = changeEvent => {
        if (changeEvent.target.value==="option2")
        {
        this.setState({
            selectedOption: changeEvent.target.value,
            selectedOption1:changeEvent.target.value,
            selectedOption2: changeEvent.target.value,
            });
         
        }
        else 
        {
            this.setState({
            selectedOption: changeEvent.target.value,});
        }
    
      };
    render() {
        

        // converting data to presentation
        // convert the color state to a style object 
     
        return (<div> 

<form>
<p>Have You programmed before?</p>
<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option1"
      checked={this.state.selectedOption === "option1" }
      onChange={this.handleOptionChange}
      className="form-check-input"
    />
   Yes
  </label>
</div>

<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option2"
      checked={this.state.selectedOption === "option2" }
      onChange={this.handleOptionChange}
      className="form-check-input"
    />
    No
  </label>
</div>

<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option3"
      checked={this.state.selectedOption === "option3" }
      onChange={this.handleOptionChange}
      className="form-check-input"
    />
   Partial
  </label>
</div>

<div className="form-group">
 
</div>

</form>

<form>
    <p> Have you Programmed in Java?</p>
<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option1"
      checked={this.state.selectedOption1 === "option1"}
      onChange={this.HandleChanges1}
      className="form-check-input"
    />
    Yes
  </label>
</div>

<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option2"
      checked={this.state.selectedOption1 === "option2"}
      onChange={this.HandleChanges1}
      className="form-check-input"
    />
   No
  </label>
</div>

<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option3"
      checked={this.state.selectedOption1 === "option3"}
      onChange={this.HandleChanges1}
      className="form-check-input"
    />
   Partial
  </label>
</div>

<div className="form-group">
  
</div>

</form>

<form>
<p>Have you Programmed in Python? </p>

<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option1"
      checked={this.state.selectedOption2 === "option1"}
      onChange={this.HandleChanges2}
      className="form-check-input"
    />
    Yes 
  </label>
</div>

<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option2"
      checked={this.state.selectedOption2 === "option2"}
      onChange={this.HandleChanges2}
      className="form-check-input"
    />
    No
  </label>
</div>

<div className="form-check">
  <label>
    <input
      type="radio"
      name="react-tips"
      value="option3"
      checked={this.state.selectedOption2 === "option3"}
      onChange={this.HandleChanges2}
      className="form-check-input"
    />
   Partial
  </label>
</div>

<div className="form-group">
  
</div>

</form>



{/* ... */}



        </div>);


    }
}
