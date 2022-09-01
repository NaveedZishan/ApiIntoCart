import React from "react";
class Search extends React.Component{
    constructor(){
super();
this.state = {
    items: [],
    DataisLoaded: false,
    
};
    }

    componentDidMount() {
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.users,
                    DataisLoaded: true
                });
            })
    }




    render(){
        
        const { DataisLoaded, items } = this.state;
        console.log(items);
        if (!DataisLoaded) return 
            <h1> Pleses wait some time.... </h1>  ;
   
            return (



                <div className = "App">
                    <h1> Search data from  api in react and display</h1> 
                    
                    <textarea name="TextAreaName" id="TextArea" cols="80" rows="6">search here...</textarea> {
                        
                        items.map((item) => ( 
                        <div key = { item.id } >
                            
                                CONTACTS: { item.phone } , 
                            PASSWORD: { item.password }, 
                            EMAIL-ID: { item.email } ,
                          
                            
                            </div>
                        ))
                    }
                </div>
                
            );

    }
    
}
export default Search;