export function Header() {

        return(
            <header>
                <div style={{display: 'flex', flexGrow: '4', justifyContent: 'start', alignItems: 'center' }}>
                    <img src="./clipboard2.svg" width={100} style={{marginRight: '25%'}}/>
                    <h1>Todo List</h1>
                </div>
                <p>Keep track of your tasks and stay organized!</p>
            </header>
        )       
}