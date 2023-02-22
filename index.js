const Button = props => {
   const {message,button-text}=props;
   return (<button className={`${message}`}>{button-text}</button>)
}

const element = (
    <div className="bg-container">
        <h1 className="heading">Social Button</h1>
        <div>
            <Button message="button1" button-text="Like"/>
            <Button message="button2" button-text="Comment"/>
            <Button message="button3" button-text="Share"/>
        </div>
    </div>
)

ReactDOM.render(element, document.getElementById('root'))
