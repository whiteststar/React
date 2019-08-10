const TodoItem = ({id, description, deadline, done}) => {
    return (
            <li className={done === true ? "crossed-line" : ""}>
                {description} - {deadline}
            </li>
    );
}

const Static = () => {
    return (
        <section>
            <h2>Static List</h2>
            <ul className='static'>
                <TodoItem description={'Get out of bed'} deadline={'Wed Sep 13 2017'}/>
                <TodoItem description={'Brush teeth'} deadline={'Thu Sep 14 2017'}/>
                <TodoItem description={'Eat breakfast'} deadline={'Fri Sep 15 2017'}/>
            </ul>            
        </section>
    );
};

const Dynamic = ({props}) => {
    const toRender = props.map(({id, done, description, deadline}) => {
        return <TodoItem key={id} id={id} description={description} deadline={deadline} done={done} />
    });
    return (
        <section>
            <h2>Dynamic List</h2>
            <ul className='dynamic'>{toRender}</ul>
        </section>
    );
};


class ListRenderer extends React.Component {
    
    ToDos = [
        {
            id: 1,
            description: "Get out of bed",
            deadline: "2017-09-11",
            done: true
        },
        {
            id: 2,
            description: "Brush teeth",
            deadline: "2017-09-10",
            done: false
        },
        {
            id: 3,
            description: "Eat breakfast",
            deadline: "2017-09-09",
            done: false
        }
    ];
    
    render () {
        return (
            <div>
                <Static />
                <Dynamic props={this.ToDos} />
            </div>
        );
    }   
}

const domContainer = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<ListRenderer />, domContainer); 