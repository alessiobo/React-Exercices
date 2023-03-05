import {Hello} from './Hello'
import {Welcome} from './Welcome'

export function App(){
    return (
        <div>
            <Hello />
            <Welcome name={<strong>Alessio</strong>} />
        </div>
    )
}
