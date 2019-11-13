import React, {Component} from 'react';
import './App.css';




const Notification = (props: any) => {
    return <div className={"notification " + props.className}>{props.text}</div>
}

interface IProps {}

type NotificationType = "error" | "success" | "warning"



interface INotification {
    id: number
    title: string
    type: NotificationType
}

interface  IState {
    notifications: Array<INotification>

}

class App extends Component <IProps,IState> {
    state: IState = {
        notifications: [ ]
    }

    addNotification = (type: NotificationType,title: string) =>{
        let note = {id: (new Date()).getTime(), title: title, type: type}
        let notifications: Array <INotification> = [...this.state.notifications,note ]
        this.setState ({
            notifications: notifications
        })
        setTimeout(()=>{
            this.setState({
                notifications: this.state.notifications.filter(n => n.id != note.id)
            })
        },3000)
    }

    successClick = () =>{
        this.addNotification("success", "Yes")
    }

    errorClick = () =>{
        this.addNotification("error", "Bad")
    }
    warningClick = () =>{
        this.addNotification("warning", "Attation")
    }

    render() {
        let Elements = this.state.notifications.map((n) => <Notification key={n.id} text={n.title} className={n.type}/>)

        return (
            <div className="App">
                <button onClick={this.successClick}>
                    Success
                </button>
                <button onClick={this.errorClick}>Error</button>
                <button onClick={this.warningClick}>Warning</button>
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj
                sdjkasbdkasbcdkjasbjkasnkj

                <div className={"notification-block"}>
                    {Elements}
                </div>
            </div>
        );
    }
}

export default App;
