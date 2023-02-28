import {Hello} from './Hello'
import {Welcome} from './Welcome'

export function App(){
    return (
        <div>
            <Hello />
            <Welcome name='Alessio' age={28} />
        </div>
    )
}
