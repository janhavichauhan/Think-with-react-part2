class Container extends React.Component{
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>This is babel</div>
         </div> )
      };  
  }

const container = document.getElementById('react-container');
ReactDOM.render(<Container/>,container);