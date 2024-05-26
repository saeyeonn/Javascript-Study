function Hello(props) {
    return (
        <h2>Hello, {props.name}!</h2>
    );
}

function App() {
    return (
        <div>
            <Hello name="Harry" />
            <Hello name="Ron" />
            <Hello name="Hermione" />
        </div>
    );
}

