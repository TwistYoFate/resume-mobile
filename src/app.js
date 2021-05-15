import React,{useState} from 'react'
import reactDOM from 'react-dom'
import App_mobile from './components/App.mobile'
import Loading from './components/Loading'


function App(){
    const [isLoading, setIsLoading] = useState(true)
    
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);    
        }, 2000);
    }, [])

    return(
        <>
        {
            isLoading?<Loading />:<App_mobile/>        
        }
        </>
    )
}
reactDOM.render(<App />,document.getElementById("root"));




//HOT Module Reload for Fast Development
if(module.hot){
    module.hot.accept()
}
