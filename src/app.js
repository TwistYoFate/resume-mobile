import React,{Suspense, useState} from 'react'
import reactDOM from 'react-dom'
import App_mobile from './components/App.mobile'
import Loading from './components/Loading'


function App(){
    const [isLoading, setIsLoading] = useState(true)
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
    setTimeout(() => {
        setIsLoading(false);    
    }, 1000);

    return(
        <>
        {
            isMobileDevice?(isLoading?<Loading />:<Suspense fallback={<Loading />}><App_mobile/></Suspense>):window.location.href=process.env.RESUME_DESKTOP
        }
        </>
    )
}
reactDOM.render(<App />,document.getElementById("root"));




//HOT Module Reload for Fast Development
if(module.hot){
    module.hot.accept()
}
