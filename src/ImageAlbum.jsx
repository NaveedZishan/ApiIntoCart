import React from "react";
import "./ImageAlbum.css"
class ImageAlbum extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
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
    render() {
        const { DataisLoaded, items } = this.state;
        console.log(items);
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                
                items.map((item) => ( 
                <div key = { item.id } >
                    
                        CONTACTS: { item.phone } , 
                    PASSWORD: { item.password }, 
                    EMAIL-ID: { item.email } ,
                  <div >  <img src={item.image} className="image"></img></div>
                    
                    </div>
                ))
            }
        </div>
    );
}
}
   
export default ImageAlbum;